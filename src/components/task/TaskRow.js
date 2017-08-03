import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TaskRow = ({task}) => {
  return (
    <tr>
      <td><Link to={'/task/' + task.id}>{task.title}</Link></td>
      <td>{task.authorId}</td>
      <td>{task.date}</td>
      <td>{task.importance}</td>
      <td><a href={task.watchHref} target="_blank">{task.watchHref}</a></td>
    </tr>
  );
};

TaskRow.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskRow;
