import { INCREMENT } from "../Types";

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
  }
};

export default counterReducer;
