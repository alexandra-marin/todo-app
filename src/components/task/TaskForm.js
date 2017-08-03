import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const TaskForm = ({ task, allUsers, onSave, onChange, saving, errors }) => {
	return (
		<form>
			<h1>Manage task</h1>
			<TextInput
				name="title"
				label="Title"
				value={task.title}
				onChange={onChange}
				error={errors.title}
			/>

			<SelectInput
				name="authorId"
				label="Author"
				value={task.authorId}
				defaultOption="Select Author"
				options={allUsers}
				onChange={onChange}
				error={errors.authorId}
			/>

			<TextInput
				name="date"
				label="Due date"
				value={task.date}
				onChange={onChange}
				error={errors.date}
			/>

			<TextInput
				name="importance"
				label="Importance"
				value={task.importance}
				onChange={onChange}
				error={errors.importance}
			/>

			<input
				type="submit"
				disabled={saving}
				value={saving ? "Saving..." : "Save"}
				className="btn btn-primary"
				onClick={onSave}
			/>
		</form>
	);
};

TaskForm.propTypes = {
	task: React.PropTypes.object.isRequired,
	allUsers: React.PropTypes.array,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	saving: React.PropTypes.bool,
	errors: React.PropTypes.object
};

export default TaskForm;
