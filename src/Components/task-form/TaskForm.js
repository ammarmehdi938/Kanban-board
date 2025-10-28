import Title from "./Title";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import Priority from "./Priority";
import Assignee from "./Assignee";
import { useState } from "react";
import { Button, Drawer, Box } from "@mui/material";
import { Slide } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "../../Schema/Validation";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTaskDrawer,
  createTask,
  updateTask,
} from "../../Store/Actions/TodoActions";
import Status from "./Status";
import { Edit } from "@mui/icons-material";

const TaskForm = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const taskDrawer = useSelector((state) => state.taskDrawer);
  const tasks = useSelector((state) => state.tasks);
  const { id: taskId, mode } = taskDrawer || {};
  // const taskData =
  //   mode === "edit" && taskId ? tasks.find((t) => t.id === taskId) : {};

  const { open } = taskDrawer;
  const taskData =
    mode === "edit" && taskId ? tasks.find((t) => t.id === taskId) || {} : {};
  // const initialValues = {
  //   title: "",
  //   Start_Date: "",
  //   End_Date: "",
  //   priority: "",
  //   status: "",
  //   assignee: "",
  // };

  const formik = useFormik({
    initialValues: {
      title: taskData?.title || "",
      Start_Date: taskData?.Start_Date || "",
      End_Date: taskData?.End_Date || "",
      priority: taskData?.priority || "",
      status: taskData?.status || "",
      assignee: taskData?.assignee || "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newData = { ...taskData, ...values };

      if (mode === "edit") {
        updateTask(newData, dispatch);
      } else {
        createTask(newData, dispatch);
      }

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
          formik={formik}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <StartDate formik={formik} />
        <EndDate formik={formik} />
        <Status formik={formik} />
        <Priority formik={formik} />
        <Assignee formik={formik} />
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

export default TaskForm;
