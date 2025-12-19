import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { changePasswordValidationSchema } from "../../Schema/Validation";
import axiosInstance from "../utils/axiosInstance";

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: changePasswordValidationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const payload = {
          current_password: values.currentPassword,
          new_password: values.newPassword,
          confirm_new_password: values.confirmNewPassword,
        };
        const response = await axiosInstance.patch("/change-password", payload);

        if (response.status === 200 || response.status === 201) {
          alert("Password changed successfully");
        }
      } catch (error) {
        if (error.response) {
          setErrors({ apiError: "Current password is incorrect" });
        } else if (error.request) {
          setErrors({
            apiError: "No response from server. Please check your connection.",
          });
        } else {
          setErrors({ apiError: "Something went wrong. Please try again." });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#616BCD",
        height: "100vh",
        width: "100%",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10 px",
            gap: "50px",
          }}
        >
          <Typography variant="h2">Change Password</Typography>
          <TextField
            label="Current Password"
            name="currentPassword"
            type="password"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.currentPassword &&
              Boolean(formik.errors.currentPassword)
            }
            sx={{
              width: "300px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#06070fff",
                  borderWidth: 2,
                },
                "&:hover fieldset": {
                  borderColor: "#373C74",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#06070fff",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#333333",
                "&.Mui-focused": {
                  color: "#06070fff",
                },
              },
            }}
          ></TextField>
          <TextField
            label="New Password"
            name="newPassword"
            type="password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            sx={{
              width: "300px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#06070fff",
                  borderWidth: 2,
                },
                "&:hover fieldset": {
                  borderColor: "#373C74",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#06070fff",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#333333",
                "&.Mui-focused": {
                  color: "#06070fff",
                },
              },
            }}
          ></TextField>
          <TextField
            label="Confirm New Password"
            name="confirmNewPassword"
            type="password"
            value={formik.values.confirmNewPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmNewPassword &&
              Boolean(formik.errors.confirmNewPassword)
            }
            sx={{
              width: "300px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#06070fff",
                  borderWidth: 2,
                },
                "&:hover fieldset": {
                  borderColor: "#373C74",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#06070fff",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#333333",
                "&.Mui-focused": {
                  color: "#06070fff",
                },
              },
            }}
          ></TextField>
          <Button
            sx={{ width: "300px", backgroundColor: "#1976D2" }}
            variant="contained"
            type="submit"
          >
            Change Password
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default ChangePassword;
