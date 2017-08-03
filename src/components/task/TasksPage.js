import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/taskActions";
import TaskList from './TaskList';
import { browserHistory } from "react-router";

class TasksPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			task: { title: "" }
		};

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	taskRow(task, index) {
		return (
			<div key={index}>
				{task.title}
			</div>
		);
	}

	//   redirectToAddCoursePage() {
	//     browserHistory.push('/course');
	//   }

	onChangeTitle(event) {
		const task = this.state.task;
		task.title = event.target.value;
		this.setState({
			task: task
		});
	}

	onSave(event) {
        this.props.actions.createTask(this.state.task)
    }

	render() {
		return (
			<div>
				<h1>Tasks</h1>
				<hr />
				<h2>Task List</h2>
				<TaskList tasks={this.props.tasks}/> 
				<hr />
				<h2>Add new task</h2>
				<input
					type="text"
					defaultValue="Add title"
					onClick={this.onChangeTitle}
				/>
				<input
					type="submit"
					value="Add Task"
					className="btn btn-primary"
					onClick={this.onSave}
				/>
			</div>
		);
	}
}

TasksPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
        tasks: state.tasks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(taskActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
