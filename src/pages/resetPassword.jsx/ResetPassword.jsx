import { Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { resetPasswordValidationSchema } from "../../Schema/Validation";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";

function ResetPassword() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const payload = {
          email: values.email,
        };
        const response = await axios.post(
          "http://127.0.0.1:9191/password-reset-request",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200 || response.status === 201) {
          console.log("Reset link sent successfully");
          // navigate("/resettoken");
        }
      } catch (error) {
        if (error.response) {
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
          const serverMessage =
            error.response.data?.message ||
            error.response.data?.detail ||
            "Invalid email or user not found";
          setErrors({ apiError: serverMessage });
        } else if (error.request) {
          console.error("No response received:", error.request);
          setErrors({
            apiError: "No response from server — check network connections.",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        height: "100vh",
        gap: 5,
        backgroundColor: "#616BCD",
      }}
    >
      <Box>
        <Typography variant="h4">Reset Password</Typography>
      </Box>

      <Typography variant="body1">
        Enter your email to receive a reset link
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {formik.errors.apiError && (
          <Typography variant="body2" color="error">
            {formik.errors.apiError}
          </Typography>
        )}
        <Box>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
                  color: "#06070fff", // focused label color
                },
              },
            }}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" sx={{ mt: 3, width: 300 }}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ResetPassword;
