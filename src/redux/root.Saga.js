import {all,call} from 'redux-saga/effects'
import shopSagas from './shop/shop.Saga'
import authenticationSagas from './authentication/authentication.Saga'

export default function * rootSaga(){
    yield all([call(shopSagas),call(authenticationSagas)])
}