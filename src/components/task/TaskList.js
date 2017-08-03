import React, { PropTypes } from "react";
import TaskRow from "./TaskRow";

const TaskList = ({ tasks }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>User</th>
					<th>Due Date</th>
					<th>Importance</th>
					<th>Link</th>
				</tr>
			</thead>
			<tbody>
				{tasks.map(task => <TaskRow key={task.id} task={task} />)}
			</tbody>
		</table>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired
};

export default TaskList;
