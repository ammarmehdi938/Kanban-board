import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { signInValidationSchema } from "../../Schema/Validation";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

function SignIn() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };
        const response = await axiosInstance.post("/login", payload);
        console.log(response);

        if (response.status === 200 || response.status === 201) {
          sessionStorage.setItem("accessToken", response.data.access_token);
          navigate("/boards");
        }
      } catch (error) {
        if (error.response) {
          setErrors({ apiError: "Please enter a valid email" });
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
    <Box sx={{ backgroundColor: "#616BCD", height: "100vh" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            width: 300,
            margin: "auto",
            paddingTop: 5,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="#333333">
            Welcome Back
          </Typography>

          {formik.errors.apiError && (
            <Typography variant="body2" color="error">
              {formik.errors.apiError}
            </Typography>
          )}

          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
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

          <TextField
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{
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

          <Typography variant="body2">
            <Link
              href="/resetpassword"
              s
              sx={{ color: "#06070fff", textDecoration: "none" }}
            >
              Forgot Password?
            </Link>
          </Typography>

          <Button
            type="submit"
            sx={{ width: 280, backgroundColor: "#1976D2" }}
            variant="contained"
          >
            Sign In
          </Button>

          <Typography variant="body2" color="#333333">
            Don't have an account?
            <Link
              href="/signUp"
              sx={{ color: "#06070fff", textDecoration: "none" }}
            >
              {" "}
              Sign Up
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  );
}

export default SignIn;
