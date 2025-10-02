import { Box, Button, Divider, Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import { useState } from "react";
import AddColumn from "./Column";

const Columns = (props) => {
  const { columns, data, updateTodo, CustomTextField, setColumns } = props;
  const [newColumn, setNewColumn] = useState({
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
              minWidth: "250px",

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
                {" "}
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
              <Box sx={{ fontSize: "12px", color: "#ffffff99" }}>
                {item.isInitial && <span>Initial</span>}
                {item.isFinal && <span>Final</span>}
              </Box>
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
            borderColor: "#1d4ed8",
            // backgroundColor: "#1b263599",
            // boxShadow: "0 15px 35px #0000004d",
            transform: "translateZ(4px)",
            boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4),
                    0 0 0 1px #255ae21a`,
          },
        }}
      >
        {/* TODO: change name column to AddColumn */}
        <AddColumn
          addColumn={setColumns}
          newColumn={newColumn}
          setNewColumn={setNewColumn}
        />
      </Box>
    </Box>
  );
};
export default Columns;
