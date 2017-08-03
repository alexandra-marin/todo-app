import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as taskActions from '../actions/taskActions';

describe('Store should', () => {
  it('handle creating tasks', function() {
    const store = createStore(rootReducer, initialState);
    const task = {
      title: "A"
    };

    const action = taskActions.createTaskSuccess(task);
    store.dispatch(action);

    const actual = store.getState().tasks[0];
    const expected = {
      title: "A"
    };

    expect(actual).toEqual(expected);
  });
});
