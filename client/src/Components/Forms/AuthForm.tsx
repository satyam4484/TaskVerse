import React  from 'react'
import { NavLink } from 'react-router-dom'

const AuthForm: React.FC<{ formType: string }> = ({ formType }) => {
    const redirectType: string = (formType === "login" ? "Don't have" : "Already");

    
    const continueWithGoogleHandler = () => {

        localStorage.setItem('redirectAfterLogin', window.location.pathname);

        let width: number = 600;
        let height: number = 700;

        // Adjust dimensions for smaller screens
        if (window.innerWidth < 768) {
            width = window.innerWidth * 0.9;
            height = window.innerHeight * 0.8;
        }

        const left: number = window.innerWidth / 2 - width / 2;
        const top: number = window.innerHeight / 2 - height / 2;

        window.open(
            "http://localhost:8000/auth/google/callback",
            "_self"
            // `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars`
        );
        
    }


    // useEffect(() => {
        
    // }, []);

    return (
        <div className="flex font-poppins items-center justify-center  min-w-screen min-h-screen">
            <div className="grid gap-8">
                <div
                    id="back-div"
                    className="bg-base-100 rounded-[26px] m-4"
                >
                    <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
                        <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
                            {formType}
                        </h1>
                        <form action="#" method="post" className="space-y-4">
                            <div>
                                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button
                                className="btn btn-secondary shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                                type="submit"
                            >
                                SIGN UP
                            </button>
                        </form>
                        <div className="flex flex-col mt-4 items-center justify-center text-sm">
                            <h3>
                                <span className="cursor-default dark:text-gray-300">
                                    {redirectType} an account?
                                </span>
                                <NavLink
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    to={`/${formType === "login" ? "signup" : "login"}`}
                                >
                                    <span
                                        className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        {formType === "login" ? "Signup" : "login"}
                                    </span>
                                </NavLink>
                            </h3>
                        </div>

                        {/* Third Party Authentication Options */}
                        <div
                            id="third-party-auth"
                            className="flex items-center justify-center mt-5 flex-wrap"
                        >
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={continueWithGoogleHandler}>
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                <span>Continue with Google</span>
                            </button>
                        </div>
                        {formType === "signup" &&
                            <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                                <p className="cursor-default">
                                    By signing in, you agree to our
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Terms
                                        </span>
                                    </a>
                                    and
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Privacy Policy
                                        </span>
                                    </a>
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm