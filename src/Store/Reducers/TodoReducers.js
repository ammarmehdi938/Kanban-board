import { CLOSE_TASK_DRAWER, CREATE_TASK, DELETE_TASK, INCREMENT, OPEN_TASK_DRAWER } from "../Types";

const initialState = {
  count: 0,
  tasks: [],
  taskDrawer: {
    open: false,
    id: null,
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case OPEN_TASK_DRAWER: {
      return {
        ...state,
        taskDrawer: { open: true, ...action.paload },
      };
    }

    case CLOSE_TASK_DRAWER: {
      return {
        ...state,
        taskDrawer: {
          open: false,
          id: null,
        },
      };
    }
    case CREATE_TASK: {
      const createdTask = action.paload;

      return {
        ...state,
        tasks: [...state.tasks, createdTask],
      };
    }
    // case UPDATE_TASK: {
    //   const allTasks = state.tasks;

    //   const { id, ...data } = action.paload.data;
    //   const updatedTasksList = allTasks.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, data };
    //     }
    //     return item;
    //   });
    //   // const tasks =
    //   return {
    //     ...state,
    //     tasls: [...updatedTasksList],
    //   };
    // }
    case DELETE_TASK: {
      const allTasks = state.tasks;

      const id = action.paload.id;
      const updatedTasksList = allTasks.filter((item) => {
        if (item.id === id) {
          return;
        }
      });
      // const tasks =
      return {
        ...state,
        tasls: [...updatedTasksList],
      };
    }
    default:
      return state;
  }
};
export default counterReducer;
