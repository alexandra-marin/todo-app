import { createStore } from "redux";

const tasks = [
	{
		task: "Task #1",
		state: "pending"
	},
	{
		task: "Task #2",
		state: "done"
	}
];

const defaultState = {
	todos: tasks.filter(x => x.state === "pending"),
	allTodos: tasks,
	filter: "pending"
};

function taskStore(state = defaultState, action) {
	switch (action.type) {
		case "ADD":
			const allTodos = state.allTodos.concat([
				{
					task: action.task.task.toString(),
					state: "pending"
				}
			]);
			return Object.assign({}, state, {
				allTodos,
				todos: allTodos.filter(x => x.state === state.filter)
			});
			break;

		case "DELETE":
			const doneTask = Object.assign({}, action.task, { state: "done" });
			const allUpdated = state.allTodos.map(x => {
				return x === action.task ? doneTask : x;
			});
			return Object.assign({}, state, {
				allTodos: allUpdated,
				todos: allUpdated.filter(x => x.state === state.filter)
			});
			break;
		case "TOGGLE_STATE":
			const filter = state.filter === "pending" ? "done" : "pending";
			return Object.assign({}, state, {
				filter,
				todos: state.allTodos.filter(x => x.state === filter)
			});
			break;
		default:
			return state;
			break;
	}
}

export default createStore(taskStore);
