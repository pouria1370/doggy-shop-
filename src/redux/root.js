import {combineReducers} from 'redux'
import authenticationReducer from './authentication/authenticationReducer'
import dropdownItemReducer from './dropdown-item/dropdownItemReducer'
import dropdownReducer from './dropdown/dropdownReducer'


export default combineReducers({
    authentication:authenticationReducer,
    dropdown:dropdownReducer,
    dropdownItem:dropdownItemReducer
})