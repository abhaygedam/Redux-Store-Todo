import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from "./actionsTypes";


const initialState = {
        loading: false,
        error: false,
        token:"",
}


export const AuthReducerFn = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: payload,
            }
        case LOGIN_ERROR:
            return {
                  ...state,
                loading: false,
                  error: true,
            }
        default:
            return { ...state };
    }
};


class Store{
    constructor(AuthReducerFn, initialState) {
        this.reducer = AuthReducerFn;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}
