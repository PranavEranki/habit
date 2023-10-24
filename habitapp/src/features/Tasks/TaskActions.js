export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId
  };
};

export const updateTask = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask
  };
};
