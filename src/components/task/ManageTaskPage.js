import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/taskActions";
import * as userActions from "../../actions/userActions";
import TaskForm from "./TaskForm";
// import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from "toastr";

export class ManageTaskPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			task: Object.assign({}, props.task),
			errors: {},
			saving: false
		};

		this.updateTaskState = this.updateTaskState.bind(this);
		this.saveTask = this.saveTask.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.task.id != nextProps.task.id) {
			this.setState({ task: Object.assign({}, nextProps.task) });
		}
	}

	updateTaskState(event) {
		const field = event.target.name;
		let task = Object.assign({}, this.state.task);
		task[field] = event.target.value;
		return this.setState({ task: task });
	}

	//   courseFormIsValid() {
	//     let formIsValid = true;
	//     let errors = {};

	//     if (this.state.task.title.length < 5) {
	//       errors.title = 'Title must be at least 5 characters.';
	//       formIsValid = false;
	//     }

	//     this.setState({errors: errors});
	//     return formIsValid;
	//   }

	saveTask(event) {
		event.preventDefault();

		// if (!this.courseFormIsValid()) {
		// 	return;
		// }

		this.setState({ saving: true });

		this.props.actions.saveTask(this.state.task)
		.then(() => this.redirect())
		.catch(error => {
			toastr.error(error);
			this.setState({ saving: false });
		});
	}

	redirect() {
		this.setState({ saving: false });
		toastr.success("Task saved");
		this.context.router.push("/tasks");
	}

	render() {
		return (
			<TaskForm
				task={this.state.task}
				allUsers={this.props.users}
				onChange={this.updateTaskState}
				onSave={this.saveTask}
				errors={this.state.errors}
				saving={this.state.saving}
			/>
		);
	}
}

ManageTaskPage.propTypes = {
	task: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

ManageTaskPage.contextTypes = {
	router: PropTypes.object
};

function getTaskById(tasks, id) {
	const task = tasks.filter(x => x.id == id);
	if (task) {
		return task[0];
	}
	return null;
}

function mapStateToProps(state, ownProps) {
	const taskId = ownProps.params.id;

	let task = {};
	if (taskId && state.tasks.length > 0) {
		task = getTaskById(state.tasks, taskId);
	}

	return {
		task: task,
		users: state.users.map(u => {
			return {
				value: u.id,
				text: u.firstName
			};
		})
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(taskActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
