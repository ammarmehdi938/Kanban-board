import { Box, Button, Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import { useState } from "react";
import Column from "./Column";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import DynamicTask from "./DynamicTask";

const Columns = (props) => {
  const [createTask, setCreateTask] = useState(false);
  const { columns, data, updateTodo } = props;
  console.log("data in columns", data);

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
        // overflowX: "auto",
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
                borderRadius: "10px",
                padding: "4px",
                border: "2px solid #19bb84",
                boxShadow: "0px 0px 4px #19bb84",
                width: "250px",
                minWidth: "200px",
                // borderRadius: '10px',
                display: "block",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                overflowX: "auto",
                height: "500px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            >
              <span display="inline">
                {item.label}
                {/* {<Badge badgeContent={4} color="primary">
                            {columnData.length}
                        </Badge>} */}
                {columnData.length}
              </span>
              {columnData.length
                ? columnData.map((item, index) => {
                    return (
                      <TaskCard
                        data={data}
                        item={item}
                        updateTodo={updateTodo}
                      />
                    );
                  })
                : "No Task Found"}
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          backgroundColor: "#1B2635",
          height: "500px",
          border: "2px solid #19bb84",
          borderRadius: "10px",
          overflowY: "auto",
        }}
      >
        <Column handleCreateTask={handleCreateTask} />

        <DynamicTask createTask={createTask} setCreateTask={setCreateTask} />
      </Box>
    </Box>
  );
};
export default Columns;
