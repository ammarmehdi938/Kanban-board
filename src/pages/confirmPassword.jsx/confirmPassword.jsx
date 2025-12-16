import { Box, Button, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { confirmPasswordValidationSchema } from "../../Schema/Validation";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ConfirmPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const formik = useFormik({
    initialValues: { newPassword: "", confirmPassword: "" },
    validationSchema: confirmPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const payload = {
          new_password: values.newPassword,
          confirm_password: values.confirmPassword,
          token: token,
        };
        const response = await axios.patch(
          "http://127.0.0.1:9191/reset-password",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              // token: token,
            },
          }
        );
        if (response.status === 200) {
          alert("Password Reset Successfully");
          navigate("/signin");
        }
      } catch (error) {
        const message = error.response?.data?.message || "something went wrong";
        setErrors({ apiError: message });
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        gap: 3,
        backgroundColor: "#616BCD",
      }}
    >
      <Typography variant="h4">Create New Password</Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="New Password"
            type="password"
            name="newPassword"
            id="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            sx={{
              width: "300px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#06070fff", // normal border
                  borderWidth: 2,
                },
                "&:hover fieldset": {
                  borderColor: "#373C74", // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#06070fff", // focused border
                },
              },
              "& .MuiInputLabel-root": {
                color: "#333333", // normal label color
                "&.Mui-focused": {
                  color: "#06070fff",
                },
              },
            }}
          />

          <TextField
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
            label="Confirm New Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          <Button type="submit" variant="contained">
            Reset Password
          </Button>
        </Box>
      </form>
    </Box>
  );
}
export default ConfirmPassword;
