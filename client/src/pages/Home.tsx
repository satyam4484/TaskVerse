import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Home: React.FC<{}> = () => {
    const navigate = useNavigate();
    console.log("inside the home componente")
    const getUser = async () => {
        console.log("calling the get user");
		try {
			const url = `http://localhost:8000/auth/google/login`;
			const {data} = await axios.get(url,{ withCredentials: true });
            if(data.sucess === true) {

            }
            console.log("data---",data);
            // if(res.status == 400) {
            //     navigate('/login');
            // }

		} catch (err) {
            navigate('/login');
			console.log(err);
		}
	};
    useEffect(() => {
        getUser();
    },[]);

    return (
        <div>Home</div>
    )
}

export default Home