import { combineReducers } from "redux";
import userReducer from "./userReducer";
import boardReducer from "./boardReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // session storage
// import storage from "redux-persist/lib/storage" // local storage

const persistConfig = {
    key: "react",
    storage,
    whitelist: ['userReducer' ]
};

const rootReducer = combineReducers({ userReducer, boardReducer, });

export default persistReducer(persistConfig, rootReducer);