import { combineReducers } from "redux";
import taskReducer from "./taskReducers";

const rootReducer = combineReducers({
	tasks: taskReducer
});
export default rootReducer;
