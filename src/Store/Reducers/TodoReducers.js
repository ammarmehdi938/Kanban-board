import {
  CLOSE_TASK_DRAWER,
  CREATE_TASK,
  DELETE_TASK,
  INCREMENT,
  OPEN_TASK_DRAWER,
  ADD_STATUS,
  DELETE_STATUS,
} from "../Types";

const initialState = {
  count: 0,
  tasks: [],
  taskDrawer: {
    open: false,
    id: null,
  },
  statuses: {
    byId: {
      todo: { id: "todo", label: "Todo", color: "#0000ff" },
      inprogress: { id: "inprogress", label: "In-Progress", color: "#ffff00" },
      inreview: { id: "inreview", label: "In Review", color: "#ffa500" },
      completed: { id: "completed", label: "Completed", color: "#028f74" },
    },
    allIds: ["todo", "inprogress", "inreview", "completed"],
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
      const { id = null } = action.payload || {};
      return {
        ...state,
        taskDrawer: { open: true, ...action.payload },
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
      const createdTask = action.payload;

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

      const id = action.payload.id;
      // const updatedTasksList = allTasks.filter((item) => {
      //   if (item.id === id) {
      //     return;
      //   }
      const updatedTasksList = allTasks.filter((item) => item.id !== id);

      // const tasks =
      return {
        ...state,
        tasks: [...updatedTasksList],
      };
    }
    default:
      return state;
    case ADD_STATUS: {
      const status = action.payload;

      const newId =
        status.id || status.title?.toLowerCase().replace(/\s+/g, ""); // fallback id
      return {
        ...state,
        statuses: {
          byId: {
            ...state.statuses.byId,
            [newId]: {
              ...status,
              id: newId,
              label: status.title,
            },
          },
          allIds: [...state.statuses.allIds, newId],
        },
      };
    }
    case DELETE_STATUS: {
      const statusId = action.payload;

      // Remove the status column
      const { [statusId]: removedStatus, ...remainingStatuses } =
        state.statuses.byId;

      // Remove all tasks with that status
      const filteredTasks = state.tasks.filter(
        (task) => task.status !== statusId
      );

      return {
        ...state,
        statuses: {
          byId: remainingStatuses,
          allIds: state.statuses.allIds.filter((id) => id !== statusId),
        },
        tasks: filteredTasks,
      };
    }
  }
};

export default counterReducer;
