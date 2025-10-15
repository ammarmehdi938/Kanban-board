import {
  INCREMENT,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  OPEN_TASK_DRAWER,
  CLOSE_TASK_DRAWER,
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
    paload: data,
  };
};

const closeTaskDrawerAction = () => {
  return {
    type: CLOSE_TASK_DRAWER,
    paload: null,
  };
};

const createTaskAction = (data) => {
  return {
    type: CREATE_TASK,
    paload: data,
  };
};
const updateTaskAction = (data) => {
  return {
    type: UPDATE_TASK,
    paload: data,
  };
};
const deleteTaskAction = (id) => {
  return {
    type: DELETE_TASK,
    paload: id,
  };
};

export const increment = (
  data,
  dispacthFn,
  success = () => {},
  failure = () => {}
) => {
  dispacthFn(incrementAction());
  // api call
  // succ
  // fail
};

export const openTaskDrawer = (data = {}, dispacthFn) => {
  dispacthFn(openTaskDrawerAction(data));
};

export const closeTaskDrawer = (dispacthFn) => {
  dispacthFn(closeTaskDrawerAction());
};

export const createTask = (
  data,
  dispacthFn,
  success = () => {},
  failure = () => {}
) => {
  dispacthFn(createTaskAction(data));
};

export const updateTask = (
  data,
  dispacthFn,
  success = () => {},
  failure = () => {}
) => {
  dispacthFn(updateTaskAction(data));
};
export const deleteTask = (
  id,
  dispacthFn,
  success = () => {},
  failure = () => {}
) => {
  dispacthFn(deleteTaskAction(id));
};
