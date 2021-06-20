import {combineReducers} from 'redux'
import authenticationReducer from './authentication/authenticationReducer'
import dropdownItemReducer from './dropdown-item/dropdownItemReducer'
import dropdownReducer from './dropdown/dropdownReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directoryReducer'
import shopReducer from './shop/shopReducer'
const persistConfig={
    key:'root',
    storage,
    whitelist:['dropdownItem']
}
const rootReducer= combineReducers({
    authentication:authenticationReducer,
    dropdown:dropdownReducer,
    dropdownItem:dropdownItemReducer,
    directory:directoryReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducer);