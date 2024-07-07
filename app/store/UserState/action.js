
import { SET_USER, RESET_USER } from "../constants"

export const SetUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export const ResetUser = (data) => {
    return {
        type: RESET_USER,
    }
}
