import { Box } from "@mui/material";
import TaskForm from "../../Components/task-form/TaskForm";
import MainHeader from "../../Components/Status_Form/MainHeader";
import Header from "../../Components/Status_Form/Header";
import Columns from "../../Components/Status_Form/Columns";
import withLayout from "../../Components/withLayout";
const Kanban = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TaskForm />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0b1018ff",
          width: "100%",
          height: "100vh",
          overflowY: "hidden",
          overflowX: "hidden",
          minHeight: "100vh",
          backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 4px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 4px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
          color: "#fff",
        }}
      >
        <span
          style={{
            marginTop: "10px",
          }}
        >
          <Header />
        </span>

        <MainHeader />

        <Columns />
      </div>
    </Box>
  );
};

export default withLayout(Kanban);
