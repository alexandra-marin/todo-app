import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/taskActions";
import TaskList from "./TaskList";
import { browserHistory } from "react-router";

class TasksPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	taskRow(task, index) {
		return (
			<div key={index}>
				{task.title}
			</div>
		);
	}

	redirectToAddCoursePage() {
		browserHistory.push("/task");
	}

	render() {
		return (
			<div>
				<h1>Tasks</h1>
				<TaskList tasks={this.props.tasks} />
				<input
					type="submit"
					value="Add Task"
					className="btn btn-primary"
					onClick={this.redirectToAddCoursePage}
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
