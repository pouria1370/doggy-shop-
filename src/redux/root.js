import {combineReducers} from 'redux'
import authenticationReducer from './authentication/authenticationReducer'
import dropdownItemReducer from './dropdown-item/dropdownItemReducer'
import dropdownReducer from './dropdown/dropdownReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    whiteList:['dropdown']
}
const rootReducer= combineReducers({
    authentication:authenticationReducer,
    dropdown:dropdownReducer,
    dropdownItem:dropdownItemReducer
})
export default persistReducer(persistConfig,rootReducer);