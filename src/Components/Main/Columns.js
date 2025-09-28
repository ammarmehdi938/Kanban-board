import { Box, Button, Divider, Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import { useState } from "react";
import Column from "./Column";
import DynamicTask from "./DynamicTask";

const Columns = (props) => {
  const [createTask, setCreateTask] = useState(false);
  const [color, setColor] = useState("#000000 ");
  const [taskTitle, setTaskTitle] = useState("");

  const { columns, data, updateTodo, CustomTextField } = props;

  // Function to handle the creation of a new task
  const handleCreateTask = () => {
    setCreateTask(true);
  };

  return (
    <Box
      sx={{
        // height: '100%',
        display: "flex",
        gap: 2,
        marginLeft: "15px",
        color: "#ffffff",
        height: "100%",
        marginBottom: "10px",
        overflowY: "auto",
      }}
    >
      {columns.map((item) => {
        const columnData = data.filter(
          (dataItem) => dataItem.status === item.key
        );
        return (
          <Box>
            <Box
              sx={{
                backgroundColor: "#1B2635",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "4px",
                height: "500px",
                width: "250px",
                boxShadow: "0 8px 32px #0000004D",
                transition: "transform 0.3s ease , box-shadow 0.3s ease",

                "&:hover": {
                  //       transform: translateY(-2px);
                  // box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
                  // border-color: rgba(255, 255, 255, 0.15);
                  // transform: "translateY(-2px)",

                  boxShadow: "0 12px 40px #00000066",
                  borderColor: "#FFFFFF26",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                }}
              >
                <Box
                  sx={{
                    fontWeight: "600px",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  {item.label}
                </Box>
                {/* background: linear-gradient(45deg, #3b82f6, #1d4ed8);
            color: #ffffff;
            border-radius: 12px;
            padding: 0.25rem 0.75rem;
            font-size: 0.8rem;
            font-weight: 500;
            min-width: 24px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3); */}

                <Box
                  sx={{
                    background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
                    borderRadius: "22px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    textAlign: "center",
                    boxShadow: "0 2px 8px #3B82F64D",
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

              <Box sx={{}}>
                {columnData.length ? (
                  columnData.map((item, index) => {
                    return (
                      <Box>
                        <TaskCard
                          data={data}
                          item={item}
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
                    }}
                  >
                    <Box sx={{ padding: "12px" }}>No Task Found</Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          // backgroundColor: "#1B2635",
          border: "2px dashed #ffffff",
          borderRadius: "16px",
          height: "500px",
          minWidth: "200px",
          cursor: "pointer",
          backdropFilter: "blur(10px)",

          //           border-color: rgba(255, 255, 255, 0.4);
          // background: rgba(27, 38, 53, 0.8);
          // transform: translateY(-4px);
          // box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          "&:hover": {
            borderColor: "#FFFFFF66",
            backgroundColor: "#1B2635CC",
            // transform: "translate(-4px)",
          },
        }}
      >
        <Column
          handleCreateTask={handleCreateTask}
          color={color}
          setColor={setColor}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
        />
      </Box>
      <Box>
        {createTask && (
          <Box
            sx={{
              border: "2px solid #19bb84",
              backgroundColor: color,
              borderRadius: "10px",
            }}
          >
            <DynamicTask
              createTask={createTask}
              setCreateTask={setCreateTask}
              taskTitle={taskTitle}
              color={color}
              setColor={setColor}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Columns;
