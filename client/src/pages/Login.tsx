
import AuthForm from "../Components/Forms/AuthForm";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";

const Login = () => {
    const {isLoggedIn} = useGlobalContext();
    const navigate = useNavigate();
    console.log("innside the login");

    useEffect(() => {
        if(isLoggedIn){
            navigate('/dashboard');
        }
    },[]);
    return (
        <AuthForm formType="login" />
    );
};

export default Login;