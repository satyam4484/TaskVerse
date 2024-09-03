export interface InitialAppState {
    isLoggedIn: boolean;
    isLoading: boolean;
    theme:string;
    user:Object
};

type action = 
    | {type: "TOGGLE_SPINNER"}
    | {type: "TOGGLE_THEME"}
    | {type: "LOGIN_USER", data: {}}

export const AppReducer = (state: InitialAppState, action: action) => {
    switch(action.type) {
        case "TOGGLE_SPINNER":
            return {...state,isLoading:!state.isLoading}
        case "TOGGLE_THEME":
            return {...state,theme:(state.theme === "dark"? "cupcake": "dark")}
        case "LOGIN_USER":
            return {...state,isLoggedIn:true,user:action.data}
    }
}