import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import {authDetailsEndPoint, userEndPoint} from "../network/agent";

const Home: React.FC<{}> = () => {
    const {userLogin} = useGlobalContext();
    const navigate = useNavigate();
    const getUser = async () => {
        const data = await authDetailsEndPoint.continueWithGoogle().then(res => res.data);
        if(data?.token) {
            // login user and redirect to dashboard
            localStorage.setItem("token",data.token);
            const userDetails = await userEndPoint.getUserProfile().then(res => res.data);
            if(userDetails) {
                userLogin(userDetails);
                navigate('/dashboard');
            }else{
                navigate('/login');
            }
        }else{
            // redirect user to page from where he will fill all the details
            navigate('/user/onboarding',{state:data});
        }
	};
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token === null) {
            getUser();
        }else{
            navigate('/dashboard');
        }
    },[]);

    return (
        <div>Home</div>
    )
}

export default Home