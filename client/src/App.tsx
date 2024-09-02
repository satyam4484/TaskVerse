import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context/context";
import Spinner from "./Components/UI/Spinner";
import Routing from "./routing/Routing";
import Logger from "./utils/Logger";

const App: React.FC = () => {
  const { theme, toggleSpin, isLoading } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    toggleSpin();
    if(localStorage.getItem("user")){
      Logger.info("User found already");
      
    }else{
      Logger.warn("User not found so Redirecting to Logging page");
      navigate('/login');
    }
    toggleSpin();
  },[]);


  return (
    <>
      {isLoading && <Spinner/>}
      <div data-theme={theme}>
        <Routing />
      </div>
    </>
  );
};

export default App;