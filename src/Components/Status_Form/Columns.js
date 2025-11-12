import { Box, Button, Divider } from "@mui/material";
import TaskCard from "./TaskCard";
import AddColumn from "./addColumn";
import { useSelector } from "react-redux";
import PopUpMenu from "./PopUpMenu";
import DropdownMenu from "./DropdownMenu";
import { Draggable } from "../Drag&Drop";
import { Dropapble } from "../Drag&Drop";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableColumns = ({ id, children }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 0.2 ease, opacity 200ms ease",
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
    zIndex: isDragging ? 999 : "auto",
  };
  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </Box>
  );
};

const Columns = ({ updateTodo }) => {
  const tasks = useSelector((state) => state.tasks);
  const statuses = useSelector((state) => state.statuses);
  const statusKeys = statuses.allIds;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginLeft: "15px",

          color: "#ffffff",
          height: "100%",
          padding: "30px 0px",
          overflowX: "auto",
          overflowY: "hidden",
          alignItems: "flex-start",
        }}
      >
        <SortableContext
          items={statusKeys}
          strategy={verticalListSortingStrategy}
        >
          {statusKeys.map((key) => {
            const column = statuses.byId[key];
            const columnData = tasks.filter((task) => task.status === key);

            return (
              <SortableColumns key={key} id={key}>
                <Box
                  sx={{
                    backgroundColor: "#1B2635",
                    backdropFilter: "blur(20px)",
                    borderRadius: "16px",
                    border: `1px solid ${column.color}6d`,
                    width: "250px",
                    height: "500px",
                    boxShadow: `3px 3px 10px -3px  ${column.color}2D`,
                    transition: "transform 0.3s ease , box-shadow 0.3s ease",
                    minWidth: "250px",
                    overflowY: "auto",

                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.1)`,
                    },
                    "&:hover .more-icon": {
                      visibility: "visible",
                    },
                  }}
                >
                  <Dropapble id={key} key={key}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 8px",
                      }}
                    >
                      <Box sx={{ mr: "20px" }}>{column.label}</Box>
                      <Box
                        className="more-icon"
                        sx={{
                          visibility: "hidden",
                          color: `${column.color}`,
                          cursor: "pointer",
                        }}
                      >
                        <DropdownMenu taskId={key} />
                      </Box>
                      <Box
                        sx={{
                          background: `linear-gradient(45deg, ${column.color}, ${column.color}3b)`,
                          borderRadius: "22px",

                          padding: "0.25rem 0.75rem",
                          fontSize: "0.8rem",
                          textAlign: "center",
                          boxShadow: `0 2px 8px ${column.color}4D`,
                          marginRight: "15px",
                        }}
                      >
                        {columnData.length}
                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        color: "#ffffff",
                        width: "200px",
                        textAlign: "center",
                      }}
                    />

                    <Box>
                      {columnData.length ? (
                        columnData.map((task) => {
                          return (
                            <Box>
                              <PopUpMenu
                                taskId={task.id}
                                sx={{ position: "absolute", top: 8, right: 8 }}
                              />
                              <Draggable key={task.id} id={task.id}>
                                <TaskCard
                                  key={task.id}
                                  data={task}
                                  item={task}
                                  updateTodo={updateTodo}
                                  color={column.color}
                                />
                              </Draggable>
                            </Box>
                          );
                        })
                      ) : (
                        <Box
                          sx={{
                            textAlign: "center",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px",
                            marginTop: "50px",
                            color: "#ffffff4d",
                            backgroundColor: "transparent",
                          }}
                        >
                          No Task Found
                        </Box>
                      )}
                      <Box sx={{ fontSize: "12px", color: "#ffffff99" }}>
                        {column.isInitial && <span>Initial</span>}
                        {column.isFinal && <span>Final</span>}
                      </Box>
                    </Box>
                  </Dropapble>
                </Box>
              </SortableColumns>
            );
          })}
        </SortableContext>
        <AddColumn />
      </Box>
    </>
  );
};
export default Columns;
