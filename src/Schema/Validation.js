import * as Yup from "yup";

export const InputValidationSchema = Yup.object({
  title: Yup.string().min(2).max(25).required("Please enter Title"),
  color: Yup.string().min(6),
  isInitial: Yup.boolean(),
  isFinal: Yup.boolean(),
});

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  Start_Date: Yup.string(),
  End_Date: Yup.string(),
  priority: Yup.string(),
  status: Yup.string(),
  assignee: Yup.string(),
});