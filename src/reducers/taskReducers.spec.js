import expect from 'expect';
import taskReducers from './taskReducers';
import * as actions from '../actions/taskActions';

describe('Task Reducer', () => {
  it('should add task when passed CREATE_TASK_SUCCESS', () => {
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newTask = {title: 'C'};
    const action = actions.createTaskSuccess(newTask);

    const newState = taskReducers(initialState, action);

    expect(newState.length).toEqual(3);
  });

  it('should update task when passed UPDATE_TASK_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateTaskSuccess(course);

    const newState = taskReducers(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);

    expect(updatedCourse.title).toEqual('New Title');
  });
});
