import {
  OPEN_TASK_DRAWER,
  CLOSE_TASK_DRAWER,
  INCREMENT,
  ADD_STATUS,
  UPDATE_STATUS,
  DELETE_STATUS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../Types";

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const openTaskDrawerAction = (data) => {
  return {
    type: OPEN_TASK_DRAWER,
    payload: data,
  };
};

const closeTaskDrawerAction = () => {
  return {
    type: CLOSE_TASK_DRAWER,
    payload: null,
  };
};

const createTaskAction = (data) => {
  return {
    type: CREATE_TASK,
    payload: data,
  };
};
const updateTaskAction = (data) => {
  return {
    type: UPDATE_TASK,
    payload: data,
  };
};
const updateStatusAction = (data) => {
  return {
    type: UPDATE_STATUS,
    payload: data,
  };
};
const deleteTaskAction = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

const deleteStatusAction = (statusId) => {
  return {
    type: DELETE_STATUS,
    payload: statusId,
  };
};

export const increment = (
  data,
  dispatchFn,
  success = () => {},
  failure = () => {}
) => {
  dispatchFn(incrementAction());
};

export const openTaskDrawer = (data = {}, dispatchFn) => {
  dispatchFn(openTaskDrawerAction(data));
};

export const closeTaskDrawer = (dispatchFn) => {
  dispatchFn(closeTaskDrawerAction());
};

export const createTask = (
  data,
  dispatchFn,
  success = () => {},
  failure = () => {}
) => {
  const randomId = () => Math.random().toString(36).substring(2, 10);
  const taskWithId = {
    ...data,
    id: data.id || randomId(),
  };

  dispatchFn({
    type: CREATE_TASK,
    payload: taskWithId,
  });
};

export const updateTask = (
  data,
  dispatchFn,
  success = () => {},
  failure = () => {}
) => {
  dispatchFn(updateTaskAction(data));
};
export const updateStatus = (data, dispatchFn) => {
  dispatchFn(updateStatusAction(data));
};
export const deleteTask = (
  id,
  dispatchFn,
  success = () => {},
  failure = () => {}
) => {
  dispatchFn(deleteTaskAction(id));
};

const AddStatusAction = (data) => {
  return {
    type: ADD_STATUS,
    payload: data,
  };
};

export const addStatus = (data, dispatchFn) => {
  dispatchFn(AddStatusAction(data));
};

export const deleteStatus = (statusId, dispatchFn) => {
  dispatchFn(deleteStatusAction(statusId));
};
