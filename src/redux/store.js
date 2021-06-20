import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root";
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk'

const middleWares = [thunk,logger];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);
export default { store, persistor };
