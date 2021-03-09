import { createStore, combineReducers } from "redux"
import authReducer from './authReducer'
import subReducer from './subReducer'

const rootReducer = combineReducers({
    authReducer, subReducer
})

export default createStore(rootReducer)