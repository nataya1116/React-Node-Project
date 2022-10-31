import { combineReducers } from "redux";
import user from "./userReducer";
import board from "./boardReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // session storage
// import storage from "redux-persist/lib/storage" // local storage

const persistConfig = {
    key: "react",
    storage,
    whitelist: ['userReducer' ]
};

const rootReducer = combineReducers({ user, board, });

export default persistReducer(persistConfig, rootReducer);