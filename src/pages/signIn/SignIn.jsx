import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import Link from "@mui/material/Link";
function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
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
            marginTop: 8,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="#333333">
            Welcome Back
          </Typography>

          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <Typography variant="body2">
            <Link href="/forgotPassword">Forgot Password?</Link>
          </Typography>

          <Button
            type="submit"
            sx={{ width: 280, backgroundColor: "#333333" }}
            variant="contained"
          >
            Sign In
          </Button>

          <Typography variant="body2" color="#333333">
            Don't have an account?<Link href="/signUp"> Sign Up</Link>
          </Typography>
        </Box>
      </form>
    </Box>
  );
}

export default SignIn;
