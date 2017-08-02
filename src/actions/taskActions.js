import * as types from './actionTypes';

export function createTask(task) {
	return { type: types.CREATE_TASK, task: task };
}
