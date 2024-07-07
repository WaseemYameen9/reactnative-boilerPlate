import { SET_USER, RESET_USER } from "../constants";

const initialState = {
    _id: "",
    email: "",
    auth: false,
};

export const userData = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                _id: action.payload._id,
                email: action.payload.email,
                auth: true,
            };
        
        case RESET_USER:
            return initialState;
        
        default:
            return state;
    }
};