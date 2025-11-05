import Kanban from "./pages/pages/kanban/kanban";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { moveUpdateTask } from "./Store/Actions/TodoActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import TaskCard from "./Components/Status_Form/TaskCard";
import { useState } from "react";
import { MOVE_STATUS } from "./Store/Types";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const statuses = useSelector((state) => state.statuses);
  const [activeTask, setActiveTask] = useState(null);

  const handleDragStart = (event) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    // if (task) setActiveTask(task)

    if (task) {
      setActiveTask(task);
    } else {
      setActiveTask(null);
    }
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const allStatuses = statuses.allIds;
    if (allStatuses.includes(activeId) && allStatuses.includes(overId)) {
      dispatch({
        type: MOVE_STATUS,
        payload: { activeId, overId },
      });
      return;
    }
    const task = tasks.find((t) => t.id === activeId);
    if (task && task.status !== overId) {
      const updatedTask = { ...task, status: overId };
      dispatch(moveUpdateTask(updatedTask));
    }
    setActiveTask(null);
    // const activeId = active.id;
    // const overId = over.id;

    // const task = tasks.find((t) => t.id === activeId);
    // if (!task) return;
    // const tasks = useSelector((state) => state.tasks);
    // if (task.status !== overId) {
    //   const updatedTask = { ...task, status: overId };
    //   dispatch(moveUpdateTask(updatedTask));
    // if (task.status !== overId) {
    //   const updatedTask = { ...task, status: overId };
    //   dispatch(moveUpdateTask(updatedTask));
    // } else {
    //   dispatch({
    //     type: MOVE_STATUS,
    //     payload: { activeId, overId },
    //   });
    // }
  };

  return (
    <>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <DragOverlay
        // dropAnimation={{
        //   duration: 200,
        //   easing: "ease-in-out",
        // }}
        >
          {activeTask ? (
            <div style={{ opacity: 0.9, transform: "scale(1.02)" }}>
              <TaskCard data={activeTask} item={activeTask} />
            </div>
          ) : null}
        </DragOverlay>

        <Kanban />
      </DndContext>
    </>
  );
}
export default App;
