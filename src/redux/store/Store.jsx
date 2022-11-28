import { createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
 import Rootreducer from "../reducer/Rootreducer"

// https://github.com/reduxjs/redux-devtools/tree/main/extension#installation //
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Rootreducer,composeEnhancers(applyMiddleware(thunk)));
export default Store;
