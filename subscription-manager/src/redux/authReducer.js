const initialState = {
    user_id: null,
    email: '',
    loggedIn: false
}

const SET_USER = 'SET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: SET_USER,
        payload: null
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user_id: action.payload.user_id,
                email: action.payload.email,
                loggedIn: true
            }
        case LOGOUT_USER:
            return {...initialState}
        default: return state 
    }
}