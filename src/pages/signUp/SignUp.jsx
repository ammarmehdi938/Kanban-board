import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const payload = {
          first_name: values.firstName,
          last_name: values.lastName,
          username: values.userName,
          email: values.email,
          password: values.password,
          confirm_password: values.confirmPassword,
        };

        const response = await axios.post(
          "https://gcr8agtm37qm.share.zrok.io/register",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 15000, // optional
          }
        );

        if (response.status === 200 || response.status === 201) {
          localStorage.setItem("user", JSON.stringify(response.data));

          navigate("/resource-workload");
        }
      } catch (error) {
        // Inspect different error shapes:
        if (error.response) {
          // Server responded with a status code out of 2xx
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
          // Try to show server-provided message(s)
          const serverMessage =
            error.response.data?.message ||
            error.response.data?.detail ||
            JSON.stringify(error.response.data);
          setErrors({ apiError: serverMessage });
        } else if (error.request) {
          // Request made but no response (possible CORS, network, or server down)
          console.error("No response received:", error.request);
          setErrors({
            apiError: "No response from server — check network/CORS.",
          });
        } else {
          // Other errors
          setErrors({ apiError: "Something went wrong. Please try again." });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="signUp">
      <h1>Create Account</h1>
      <h1>
        <axiosInterceptors />
      </h1>

      {/* SUBMIT FORM */}
      <form onSubmit={formik.handleSubmit}>
        {formik.errors.apiError && (
          <p className="error">{formik.errors.apiError}</p>
        )}
        <div className="signUpInputs">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="error">{formik.errors.firstName}</p>
          )}
        </div>

        {/* LAST NAME */}
        <div className="signUpInputs">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="error">{formik.errors.lastName}</p>
          )}
        </div>

        {/* USERNAME */}
        <div className="signUpInputs">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            {...formik.getFieldProps("userName")}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p className="error">{formik.errors.userName}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="signUpInputs">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="signUpInputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          <Link to="/ForgotPassword" className="forget">
            Forgot Password
          </Link>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="signUpInputs">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div className="signUpInputs">
          <button type="submit">Create Account</button>
        </div>

        {/* SIGN IN REDIRECT */}
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
export default SignUp;
