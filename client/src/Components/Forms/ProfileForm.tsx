import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userEndPoint } from "../../network/agent";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { generateUsername } from "../../utils/service";

// Define the interface for user data
interface UserData {
    first_name: { value: string; error: boolean };
    last_name: { value: string; error: boolean };
    email: { value: string; error: boolean };
    username: { value: string; error: boolean };
    googleId: string;
    avatar: string; // Avatar might not need an error property, but you can include it if necessary
}

const formFields = [
    { label: 'First Name', name: 'first_name', type: 'text', placeholder: 'First Name' },
    { label: 'Last Name', name: 'last_name', type: 'text', placeholder: 'Last Name' },
    { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter your Username' },
    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
];

const ProfileForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {userLogin} = useGlobalContext();
    const data = location.state || {};

    const username = generateUsername(data?.email, data?.given_name, data?.family_name);

    // Initialize state with the correct type
    const [userData, setUserData] = useState<UserData>({
        first_name: { value: data?.given_name || '', error: false },
        last_name: { value: data?.family_name || '', error: false },
        email: { value: data?.email || '', error: false },
        username: { value: username || '', error: false },
        googleId: data?.sub || '',
        avatar: data?.picture || ''
    });


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: { ...[name], value }
        }));
    };

    const checkUserData = async (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Define basic validation patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/; // Example: alphanumeric with 3-20 characters
        const namePattern = /^[a-zA-Z]{2,30}$/; // Example: alphabetic with 2-30 characters

        let isValid = true;

        // Validate based on field name
        switch (name) {
            case "first_name":
                if (!namePattern.test(value)) {
                    alert("First name must be alphabetic and between 2 and 30 characters long.");
                    isValid = false;
                }
                break;
            case "last_name":
                if (!namePattern.test(value)) {
                    alert("Last name must be alphabetic and between 2 and 30 characters long.");
                    isValid = false;
                }
                break;
            case "email":
                if (!emailPattern.test(value)) {
                    alert("Please enter a valid email address.");
                    isValid = false;
                }
                break;
            case "username":
                if (!usernamePattern.test(value)) {
                    alert("Username must be alphanumeric and between 3 and 20 characters long.");
                    isValid = false;
                }
                break;
            default:
                break;
        }

        // If the value is valid, check with API
        if (isValid && name === "email" || name === "username") {
            try {
                const response = await userEndPoint.checkUserData({ [name]: value });
                if (response.success === false) {
                    setUserData(prevState => ({
                        ...prevState,
                        [name]: { ...[name], error: true }
                    }));
                }
            } catch (error) {
                console.error("Error checking user data:", error);
            }
        }
    };

    const formSubmitHandler = async (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasError = Object.values(userData).some(field => field.error);
        if (hasError) {
            console.log("Form validation failed.");
            // Optionally handle the case where validation failed (e.g., show a message)
            return;
        }

        const user ={
            first_name: userData.first_name.value,
            last_name: userData.last_name.value,
            email: userData.email.value,
            username: userData.username.value,
            googleId: userData.googleId,
            avatar: userData.avatar
    }


    try {
        // Example API call
        const response = await userEndPoint.createUser(user);
        if(response.success === true) {
            localStorage.setItem("token",response.data.token);
            const userDetails = await userEndPoint.getUserProfile().then(res => res.data);
            if(userDetails) {
                userLogin(userDetails);
                navigate('/dashboard');
            }else{
                alert("something went wrong please Login Again!!");
                navigate('/login');
            }
        }else{
            alert("Something went wrong please try again!!!");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        return;
        // Handle error (e.g., show error message)
    }
}
return (
    <div className="flex h-screen items-center justify-center p-12 bg-gray-100">
        <div className="mx-auto w-full sm:max-w-[750px] px-4 bg-base-100 shadow-md rounded-xl py-10">
            <h1 className="text-center mb-8 text-purple-900 text-3xl font-bold my-10 border-l-4 border-teal-400">
                Welcome To TaskVerse 👋 👋
            </h1>
            <form className="form-control" onSubmit={formSubmitHandler}>
                {/* User Details */}
                <div className="flex flex-wrap mx-3 mb-6">
                    {formFields.map((field, index) => (
                        <div key={index} className="w-full px-3 sm:w-1/2 mb-4">
                            <label htmlFor={field.name} className="label text-gray-700 text-xl">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={userData[field.name as keyof UserData]?.value || ''} // Access value
                                placeholder={field.placeholder}
                                className={`input input-bordered w-full ${userData[field.name as keyof UserData]?.error ? 'input-error' : ''}`} // Add error class if needed
                                onChange={onChangeHandler}
                                onBlur={checkUserData} // Use onBlur instead of onChange for validation
                            />
                            {field.name === "email" || field.name === "username" && userData[field.name as keyof UserData]?.error && (
                                <p className="text-red-500 text-sm mt-2">{field.label.toLowerCase()} Already Exists please Try Valid.</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-primary hover:bg-cyan-300"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};

export default ProfileForm;