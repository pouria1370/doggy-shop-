import {combineReducers} from 'redux'
import authenticationReducer from './authentication/authenticationReducer'
import dropdownReducer from './dropdown/dropdownReducer'


export default combineReducers({
    authentication:authenticationReducer,
    dopdown:dropdownReducer
})