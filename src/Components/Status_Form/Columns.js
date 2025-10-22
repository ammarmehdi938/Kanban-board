import { Box, Button, Divider, Icon, Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import AddColumn from "./addColumn";
import { useSelector } from "react-redux";
import PopUpMenu from "./PopUpMenu";
import DropdownMenu from "./DropdownMenu";

const Columns = ({ updateTodo }) => {
  const tasks = useSelector((state) => state.tasks);
  const statuses = useSelector((state) => state.statuses);
  const stastusKeys = statuses.allIds;

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
        {stastusKeys.map((key) => {
          const column = statuses.byId[key];
          const columnData = tasks.filter((task) => task.status === key);

          return (
            <Box
              sx={{
                backgroundColor: "#1B2635",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                border: `1px solid ${column.color}6d`,
                // width: "250px",
                height: "100%",
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
                        <PopUpMenu taskId={task.id} />
                        <TaskCard
                          key={task.id}
                          data={task}
                          item={task}
                          updateTodo={updateTodo}
                        />
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
                      background: "color",
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
            </Box>
          );
        })}
        <AddColumn />
      </Box>
    </>
  );
};
export default Columns;
