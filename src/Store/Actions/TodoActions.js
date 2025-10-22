import {
  INCREMENT,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  OPEN_TASK_DRAWER,
  CLOSE_TASK_DRAWER,
  ADD_STATUS,
  DELETE_STATUS,
  UPDATE_STATUS,
} from "../Types";
// const dispatch = useDispatch();

const incrementAction = () => {
  //this is dispatcher fun
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
  // api call
  // succ
  // fail
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
  dispatchFn(createTaskAction(data));
};

export const updateTask = (
  data,
  dispatchFn,
  success = () => {},
  failure = () => {}
) => {
  dispatchFn(updateTaskAction(data));
};
export const deleteTask = (
  id,
  dispatchFn,
  success = () => {},
  failure = () => {}
) => {
  dispatchFn(deleteTaskAction(id));
};

// Status action
const AddStatusAction = (data) => {
  return {
    type: ADD_STATUS,
    payload: data,
  };
};

// Add Status Dispatcher Function
export const addStatus = (data, dispatchFn) => {
  dispatchFn(AddStatusAction(data));
};

export const deleteStatus = (statusId, dispatchFn) => {
  dispatchFn(deleteStatusAction(statusId));
};
