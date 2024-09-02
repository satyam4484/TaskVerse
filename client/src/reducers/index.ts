export interface InitialAppState {
    isLoggedIn: boolean;
    isLoading: boolean;
    theme:string;
};

type action = 
    | {type: "TOGGLE_SPINNER"}
    | {type: "TOGGLE_THEME"}

export const AppReducer = (state: InitialAppState, action: action) => {
    switch(action.type) {
        case "TOGGLE_SPINNER":
            return {...state,isLoading:!state.isLoading}
        case "TOGGLE_THEME":
            return {...state,theme:(state.theme === "dark"? "cupcak": "dark")}
    }
}