import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import userApi from "../api/mockUserApi";

export function loadUsersSuccess(users) {
	return { type: types.LOAD_USERS_SUCCESS, users: users };
}

export function loadUsers() {
	return function(dispatch) {
		dispatch(beginAjaxCall());
		return userApi
			.getAllUsers()
			.then(users => {
				dispatch(loadUsersSuccess(users));
			})
			.catch(err => {
				dispatch(ajaxCallError());
				throw err;
			});
	};
}
