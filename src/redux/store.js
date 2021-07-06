import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root";
import { persistStore } from "redux-persist";
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'  
import rootSaga from '../redux/root.Saga' 

// const middleWares = [thunk,logger];
const sagaMiddleware=createSagaMiddleware();
const middleWares = [sagaMiddleware,logger];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
export default { store, persistor };
