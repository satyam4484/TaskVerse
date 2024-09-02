import React,{useReducer,useContext, useMemo, Context, ReactNode} from "react";
import {AppReducer, InitialAppState } from "../reducers";
import Logger from "../utils/Logger";

// Define the shape of the state

export interface AppContextProps extends InitialAppState {
    toggleSpin: () => void;
    setTheme: () => void;
    userLogin: (data: any) => void;
};

const initialState: InitialAppState = {
    isLoggedIn: false,
    isLoading: false,
    user: {},
    theme:"cupcake",
}


const AppContext: Context<AppContextProps | undefined > = React.createContext<AppContextProps | undefined> (undefined);


const AppProvider: React.FC<{children: ReactNode}> = ({children}:{children: ReactNode})  => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    const toggleSpin = () : void => {
        Logger.info("Toggling the spinner");
        dispatch({type:"TOGGLE_SPINNER"});
    }

    const setTheme = (): void => {
        dispatch({type:"TOGGLE_THEME"});
    }

    const userLogin = (data:any) => {
        dispatch({type: "LOGIN_USER",data});
    }

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue: AppContextProps = useMemo(() => ({
        ...state,
        toggleSpin,
        setTheme,
        userLogin
    }), [state]);
    return (
        <AppContext.Provider 
        value={contextValue}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = (): AppContextProps => {
    const context: AppContextProps | undefined  = useContext(AppContext);

    if(! context) {
        Logger.error("useGlobalContext must be used within an AppProvider");
        throw new Error("useGlobalContext must be used within an AppProvider");
    }
    return context;
}

export {AppContext, AppProvider};


