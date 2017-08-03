import { combineReducers } from "redux";
import taskReducers from "./taskReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
	tasks: taskReducers,
	users: userReducers
});
export default rootReducer;
