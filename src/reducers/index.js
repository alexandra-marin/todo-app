import { combineReducers } from "redux";
import taskReducers from "./taskReducers";
import userReducers from "./userReducers";
import ajaxStatusReducers from "./ajaxStatusReducer";

const rootReducer = combineReducers({
	tasks: taskReducers,
    users: userReducers,
    ajaxCalls: ajaxStatusReducers
});
export default rootReducer;
