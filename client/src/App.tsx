import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userEndPoint } from "./network/agent";
import { useGlobalContext } from "./context/context";
import Spinner from "./Components/UI/Spinner";
import Routing from "./routing/Routing";

const App: React.FC = () => {
  const { isLoggedIn, theme, toggleSpin, isLoading, userLogin } = useGlobalContext();
  const navigate = useNavigate();

  const checkUserCredentials = async () => {
    const userDetails = await userEndPoint.getUserProfile().then(res => res.data);
    if (userDetails) {
      userLogin(userDetails);
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }

  useEffect(() => {
    toggleSpin();
    if (!isLoggedIn) {
      const token = localStorage.getItem("token");
      console.log("token,", token);

      if (token) {
        checkUserCredentials();
      }
    }
    toggleSpin();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div data-theme={theme}>
        <Routing />
      </div>
    </>
  );
};

export default App;