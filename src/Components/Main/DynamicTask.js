import { Box } from "@mui/material";

const DynamicTask = (props) => {
  const { color, taskTitle, selected } = props;

  const background = color || "#000000";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,

        width: "100%",
        height: "100%",
        overflowX: "auto",
        backgroundColor: background,
        borderRadius: "10px",
      }}
    >
      <Box sx={{ mt: 2 }}>{taskTitle || "No Title"}</Box>
      <Box>{selected}</Box>
    </Box>
  );
};
export default DynamicTask;
