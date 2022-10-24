import { combineReducers } from "redux";
import userReducer from "./userReducer";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({userReducer, boardReducer, });

export default rootReducer;