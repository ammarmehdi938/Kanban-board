import { Box, Typography, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSucces] = useState(false);

  useEffect(() => {
    const verify_email = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:9191/verified?token=${token}`
        );
        setSucces(true);
      } catch (err) {
        setError(err?.response?.data?.message || "Email verification Failed");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      verify_email();
    } else {
      setError("Token is Invalid");
      setLoading(false);
    }
  }, [token]);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#616BCD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "background.paper",
          minWidth: 300,
        }}
      >
        {loading && (
          <>
            <MailOutlineOutlinedIcon />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Verifying your email
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Please wait a moment while we confirm your email address
            </Typography>
            <CircularProgress />
          </>
        )}
        {!loading && success && (
          <>
            <VerifiedUserIcon />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Email Verified
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Your email address has been successfully verified. You can now
              access all features of your account.
            </Typography>
            <Button
              sx={{
                backgroundColor: "#616BCD",
                height: 46,
                width: 200,
                borderRadius: 30,
                color: "#ffffff",
              }}
              onClick={() => navigate("/boards")}
            >
              Go to Home
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
export default VerifyEmail;
