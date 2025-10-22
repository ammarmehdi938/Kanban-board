import { Box, Button, Checkbox, colors, Stack } from "@mui/material";

import CheckBoxes from "./CheckBoxes";
import { useFormik } from "formik";
import { InputValidationSchema } from "../../Schema/Validation";
import { CustomColorInput, CustomTextField } from "./Styled";
import { useDispatch } from "react-redux";
import { addStatus } from "../../Store/Actions/TodoActions";

const initialValues = {
  title: "",
  color: "",
  isInitial: false,
  isFinal: false,
};
const StatusForm = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: InputValidationSchema,
    onSubmit: (values) => {
      addStatus(values, dispatch, () => {
        console.log("Column added successfully");
      });
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          fontSize: "32px",
          color: "#19bb84",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <CustomTextField
          label="Title"
          name="title"
          value={values.title}
          id="filled-basic"
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          InputLabelProps={{
            sx: {
              color: "#ffffff",
              "&.Mui-focused": {
                color: "#19bb84",
                "&:hover": { color: "#19bb84" },
              },
            },
          }}
          variant="filled"
          InputProps={{
            disableUnderline: "true",
          }}
        />
        {/* {errors.title && <p>{errors.title}</p>} */}
        <CustomColorInput
          format="hex"
          name="color"
          // onChange={(color) => handleChange("color", color)}
          onChange={(value) => setFieldValue("color", value)}
          onBlur={handleBlur}
          value={values.color}
          label="Color"
          variant="filled"
          InputProps={{ disableUnderline: true }}
          sx={{
            mt: 2,
            width: "100%",

            "& .MuiFilledInput-root": {
              backgroundColor: "#233044",
              border: "2px solid #233044",
              borderRadius: "20px",
              color: "#ffffff",
              overflow: "hidden",
            },

            "& .MuiFilledInput-root:before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:after": {
              borderBottom: "none",
            },

            "& .MuiFilledInput-root:hover": {
              borderColor: "#19bb84",
              boxShadow: "0 0 14px -4px #19bb84",
            },

            "& .MuiInputLabel-root": {
              color: "#ffffff",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#19bb84",
            },
          }}
        />
        <CheckBoxes
          // newColumn={newColumn}
          // setNewColumn={setNewColumn}
          values={values}
          setFieldValue={setFieldValue}
          onChange={(e) => setFieldValue("isInitial", e.target.checked)}
        />
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#233044",
            borderRadius: "20px",
            height: "40px",
            width: "226px",
            mt: 2,
            color: "#ffffff",

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
    </form>
  );
};
export default StatusForm;
