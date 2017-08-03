import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import taskApi from "../api/mockTaskApi";

export function createTask(task) {
	return { type: types.CREATE_TASK, task: task };
}

export function loadTasksSuccess(tasks) {
	return { type: types.LOAD_TASKS_SUCCESS, tasks: tasks };
}

export function updateTaskSuccess(tasks) {
	return { type: types.UPDATE_TASK_SUCCESS, tasks: tasks };
}

export function createTaskSuccess(tasks) {
	return { type: types.CREATE_TASK_SUCCESS, tasks: tasks };
}

export function loadTasks() {
	return function(dispatch) {
		dispatch(beginAjaxCall());
		return taskApi
			.getAllTasks()
			.then(tasks => {
				dispatch(loadTasksSuccess(tasks));
			})
			.catch(err => {
				dispatch(ajaxCallError());
				throw err;
			});
	};
}

export function saveTask(task) {
	return function(dispatch, getState) {
		dispatch(beginAjaxCall());
		return taskApi
			.saveTask(task)
			.then(saved => {
				saved.id
					? dispatch(updateTaskSuccess(saved))
					: dispatch(createTaskSuccess(saved));
			})
			.catch(err => {
				dispatch(ajaxCallError());
				throw err;
			});
	};
}
