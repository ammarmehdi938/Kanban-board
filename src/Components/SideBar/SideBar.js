import Title from "./Title";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import Status from "./Status";
import Priority from "./Priority";
import Assignee from "./Assignee";
import { useState } from "react";
import { Button, Drawer, Box } from "@mui/material";
import { Slide } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../../Schema/Validation";
import { useDispatch, useSelector } from "react-redux";
import { closeTaskDrawer, createTask } from "../../Store/Actions/TodoActions";

// task = {
//   title: "task 1",
//   status: "In progress",
//   priority: "High",
//   startDate: "1st aug, 2025",
//   endDate: "31st aug, 2025",
//   assignee: "ammar",
// };
const SideBAR = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const taskDrawer = useSelector((state) => state.taskDrawer);

  const { open } = taskDrawer;
  const [task, setTask] = useState({});
  const initialValues = {
    title: "",
    Start_Date: "",
    End_Date: "",
    priority: "",
    status: "",
    assignee: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Submitted Form Values:", values);

      const newData = { ...data, ...values };
      createTask(newData, dispatch);

      resetForm();
      handleClose();
    },
  });

  const handleClose = () => {
    closeTaskDrawer(dispatch);
  };
  const handleSave = () => {
    formik.handleSubmit();
  };

  return open ? (
    <Drawer
      open={open}
      anchor="left"
      onClose={handleClose}
      variant="temporary"
      TransitionComponent={Slide}
      transitionDuration={3000}
      SlideProps={{
        timeout: 2000,
        direction: "left",
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backdropFilter: "none",
            backgroundColor: "transparent",
          },
        },
      }}
      PaperProps={{
        sx: {
          width: "320px",
          backgroundColor: "#233044",
        },
      }}
    >
      <Box
        component="form"
        onSubmit={formik.onSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "320px",
          backgroundColor: "#1B2635",
          height: "100vh",
        }}
      >
        <Title
          task={task}
          setTask={setTask}
          formik={formik}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <StartDate formik={formik} />
        <EndDate task={task} setTask={setTask} formik={formik} />
        <Status task={task} setTask={setTask} formik={formik} />
        <Priority task={task} setTask={setTask} formik={formik} />
        <Assignee task={task} setTask={setTask} formik={formik} />
        <Button
          onClick={handleSave}
          sx={{
            color: "white",
            backgroundColor: "#233044",
            mt: "20px",
            borderRadius: "20px",
            width: "250px",
            // height:'56px',
            "&:hover": {
              border: "2px solid #19bb84",
              color: "#19bb84",
              boxShadow: "0 0 14px -4px #19bb84",
            },
          }}
        >
          Create Task
        </Button>
      </Box>
    </Drawer>
  ) : null;
};

export default SideBAR;
