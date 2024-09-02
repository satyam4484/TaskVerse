import AuthForm from "../Components/Forms/AuthForm";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";

const SignUp = () => {
    const {isLoggedIn} = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn){
            navigate('/dashboard');
        }
    },[]);
    return (
        <AuthForm formType="signup" />
    );
};

export default SignUp;