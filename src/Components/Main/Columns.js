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

  // Column Data
  const [selected, setSelected] = useState(null);

  const handleCheckBox = (label) => () => {
    if (selected === label) {
    } else {
      setSelected(label);
    }
  };

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
        overflowX: "auto",
        alignItems: "flex-start",
      }}
    >
      {columns.map((item) => {
        const columnData = data.filter(
          (dataItem) => dataItem.status === item.key
        );
        return (
          <Box
            sx={{
              backgroundColor: "#1B2635",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "4px",
              height: "500px",
              width: "250px",
              marginTop: "15px",
              boxShadow: "0 8px 32px #0000004D",
              transition: "transform 0.3s ease , box-shadow 0.3s ease",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.1)`,
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
                  fontWeight: "bold ",
                  fontSize: "20px",
                  marginLeft: "15px",
                }}
              >
                {" "}
                {item.label}
              </Box>

              <Box
                sx={{
                  background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
                  borderRadius: "22px",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  boxShadow: "0 2px 8px #3B82F64D",
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
                    padding: "12px",
                    marginTop: "50px",
                    color: "#ffffff4d",
                  }}
                >
                  No Task Found
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          backgroundColor: "#1B2635",
          border: "2px dashed #ffffff33",
          width: "250px",
          height: "500px",
          borderRadius: "16px",
          cursor: "pointer",
          "&:hover": {
            borderColor: "#0f69c466",
            // backgroundColor: "#1b263599",
            // boxShadow: "0 15px 35px #0000004d",
            transform: "translateZ(4px)",
            boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4),
                    0 0 0 1px #255ae21a`,
          },
        }}
      >
        <Column
          handleCreateTask={handleCreateTask}
          color={color}
          setColor={setColor}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          selected={selected}
          setSelected={setSelected}
          handleCheckBox={handleCheckBox}
        />
      </Box>
      {createTask && (
        <Box
          sx={{
            backgroundColor: color,
            border: "2px solid #19bb84",
            borderRadius: "16px",
            width: "250px",
            height: "500px",
            marginTop: "15px",
            boxShadow: "0 8px 32px #0000004D",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DynamicTask
            createTask={createTask}
            setCreateTask={setCreateTask}
            taskTitle={taskTitle}
            color={color}
            setColor={setColor}
            selected={selected}
            setSelected={setSelected}
            handleCheckBox={handleCheckBox}
          />
        </Box>
      )}
    </Box>
  );
};
export default Columns;
