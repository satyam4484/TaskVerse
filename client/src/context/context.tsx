import React,{useReducer,useContext, useMemo, Context, useState, ReactNode} from "react";
import Logger from "../utils/Logger";

// Define the shape of the state
interface State {
    isLoggedIn: boolean;
    isLoading: boolean;
    theme:string;
};

interface AppContextProps extends State {
    toggleSpin: (data:boolean) => void;
};

const initialState: State = {
    isLoggedIn: false,
    isLoading: false,
    theme:"cupcake",
}


const AppContext: Context<AppContextProps | undefined > = React.createContext<AppContextProps | undefined> (undefined);


const AppProvider: React.FC<{children: ReactNode}> = ({children}:{children: ReactNode})  => {
    const [state, setState] = useState(initialState);

    const toggleSpin = (data: boolean) : void => {
        Logger.info("Toggling the Spin");
    }

    const setTheme = (data: string): void => {
        setState({...state,theme:data});
    }

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({
        ...state,
        toggleSpin,
        setTheme
    }), [state, toggleSpin]);
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


