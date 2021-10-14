import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR} from "./actionsTypes.js";


export const authLoading = () => {
    return {
        type: LOGIN_LOADING
    }
}

export const authSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload:data,
    }
}
export const authError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload:error,
    }
}