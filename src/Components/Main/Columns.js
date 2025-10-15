import { Box, Button, Divider, Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import { useState } from "react";
import AddColumn from "./addColumn";
import { useSelector } from "react-redux";

const Columns = (props) => {
  const { columns, updateTodo, setColumns } = props;

  const tasks = useSelector((state) => state.tasks);
  const [newColumn, setNewColumn] = useState({
    label: "",
    color: "" || "#ffffff",
    isInitial: false,
    isFinal: false,
  });

  return (
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
      {columns.map((item) => {
        const columnData = tasks.filter(
          (dataItem) => dataItem.status === item.key
        );
        return (
          <Box
            sx={{
              backgroundColor: "#1B2635",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: `1px solid ${item.color}6d`,
              // width: "250px",
              height: "100%",
              boxShadow: `3px 3px 10px -3px  ${item.color}2D`,
              transition: "transform 0.3s ease , box-shadow 0.3s ease",
              minWidth: "250px",
              overflowY: "auto",

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
                {item.label}
              </Box>
              <Box
                sx={{
                  background: `linear-gradient(45deg, ${item.color}, ${item.color}3b)`,
                  borderRadius: "22px",

                  padding: "0.25rem 0.75rem",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  boxShadow: `0 2px 8px ${item.color}4D`,
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
                        data={tasks}
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
                    background: "color",
                  }}
                >
                  No Task Found
                </Box>
              )}
              <Box sx={{ fontSize: "12px", color: "#ffffff99" }}>
                {item.isInitial && <span>Initial</span>}
                {item.isFinal && <span>Final</span>}
              </Box>
            </Box>
          </Box>
        );
      })}
      <AddColumn
        addColumn={setColumns}
        newColumn={newColumn}
        setNewColumn={setNewColumn}
      />
    </Box>
  );
};
export default Columns;
