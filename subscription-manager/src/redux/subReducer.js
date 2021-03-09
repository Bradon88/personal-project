const initialState = {
    subs: []
}

const SET_SUBS = 'SET_SUBS'

export function setSubs(subs) {
    return {
        type: SET_SUBS,
        payload: subs
    }
}

export default function subReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SUBS:
            return {
                ...state,
                subs: action.payload
            }
            default:
                return state
    }
}