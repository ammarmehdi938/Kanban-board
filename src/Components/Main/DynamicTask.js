import { Box } from "@mui/material";

const DynamicTask = (props) => {
  const { createTask, setCreateTask } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        width: "260px",
        overflowX: "auto",
      }}
    >
      {createTask ? <div>DynamicTask</div> : null}
    </Box>
  );
};
export default DynamicTask;
