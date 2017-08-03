import * as types from "./actionTypes";
import taskApi from "../api/mockTaskApi";

export function createTask(task) {
	return { type: types.CREATE_TASK, task: task };
}

export function loadTasksSuccess(tasks) {
	return { type: types.LOAD_COURSES_SUCCESS, tasks: tasks };
}

export function loadTasks() {
	return function(dispatch) {
		return taskApi
			.getAllTasks()
			.then(tasks => {
				dispatch(loadTasksSuccess(tasks));
			})
			.catch(err => {
				throw err;
			});
	};
}
