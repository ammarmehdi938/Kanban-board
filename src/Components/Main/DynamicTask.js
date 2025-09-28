import { Box } from "@mui/material";  

const DynamicTask = (props) => {
  const { createTask, setCreateTask, color, setColor, taskTitle } = props;
  console.log("Selected color:", color);
  const background = color || "#000000";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        width: "260px",
        height: "500px",
        overflowX: "auto",
        backgroundColor: background,
        borderRadius: "10px",
      }}
    >
      <Box sx={{ mt: 2 }}>{taskTitle || "No Title"}</Box>
    </Box>
  );
};
export default DynamicTask;
