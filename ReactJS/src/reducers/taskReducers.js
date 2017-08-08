import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function taskReducer(state = initialState.tasks, action) {
	switch (action.type) {
		case types.CREATE_TASK:
			return [...state, Object.assign({}, action.task)];
		case types.LOAD_TASKS_SUCCESS:
			return action.tasks;
		case types.CREATE_TASK_SUCCESS:
			return [...state, Object.assign({}, action.tasks)];
		case types.UPDATE_TASK_SUCCESS:
			return [
				...state.filter(x => x.id !== action.tasks.id),
				Object.assign({}, action.tasks)
			];
		default:
			return state;
	}
}
