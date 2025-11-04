import { arrayMove } from "@dnd-kit/sortable";
import {
  OPEN_TASK_DRAWER,
  CLOSE_TASK_DRAWER,
  INCREMENT,
  ADD_STATUS,
  UPDATE_TASK,
  DELETE_TASK,
  CREATE_TASK,
  UPDATE_STATUS,
  DELETE_STATUS,
  MOVE_TASK,
  MOVE_UPDATE_TASK,
  MOVE_STATUS,
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
    case DELETE_TASK: {
      const id = action.payload;
      const updatedTasksList = state.tasks.filter((task) => task.id !== id);
      return { ...state, tasks: updatedTasksList };
    }
    default:
      return state;

    case UPDATE_TASK: {
      const updatedTask = action.payload;

      const updatedTasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      );

      return { ...state, tasks: updatedTasks };
    }
    case MOVE_UPDATE_TASK: {
      const moveUpdatedTask = action.payload;

      const moveUpdatedTasks = state.tasks.map((task) =>
        task.id === moveUpdatedTask.id ? { ...task, ...moveUpdatedTask } : task
      );

      return { ...state, tasks: moveUpdatedTasks };
    }
    case MOVE_STATUS: {
      const { activeId, overId } = action.payload;
      // const oldIndex = allIds.indexOf(activeId);
      // const newIndex = allIds.indexOf(overId);
      const oldIndex = state.statuses.allIds.indexOf(activeId);
      const newIndex = state.statuses.allIds.indexOf(overId);
      if (oldIndex === -1 || newIndex === -1) return state;
      // const allIds = [...state.statuses.allIds];

      const newOrder = arrayMove(state.statuses.allIds, oldIndex, newIndex); //allIds.splice(oldIndex, 1);
      // allIds.splice(newIndex, 0, moved);

      return {
        ...state,
        statuses: {
          ...state.statuses,
          allIds: newOrder,
        },
      };
    }
    case UPDATE_STATUS: {
      const updatedStatus = action.payload;

      const { id } = updatedStatus;
      return {
        ...state,
        statuses: {
          ...state.statuses.byId,
          byId: {
            ...state.statuses.byId[id],
            ...updatedStatus,
          },
        },
      };
    }
    case ADD_STATUS: {
      const status = action.payload;

      const newId =
        status.id || status.title?.toLowerCase().replace(/\s+/g, "");
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

      const { [statusId]: removedStatus, ...remainingStatuses } =
        state.statuses.byId;

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
    case MOVE_TASK: {
      const { id, newIndex } = action.payload;
      const currentIndex = state.tasks.findIndex((item) => item.id === id);
      if (currentIndex === -1 || newIndex < 0) return state;

      const newItems = [...state.tasks];
      const newTasks = [...state.tasks];
      const [movedItem] = newItems.splice(currentIndex, 1);
      newItems.splice(newIndex, 0, movedItem);
      return { ...state, tasks: newTasks };
    }
  }
};

export default counterReducer;
