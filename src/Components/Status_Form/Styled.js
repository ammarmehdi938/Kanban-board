import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { MuiColorInput } from "mui-color-input";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: "white",
  },
  backgroundColor: "#233044",
  border: "2px solid #233044",
  borderRadius: "20px",
  textDecoration: "none",

  "&:hover": {
    borderColor: "#19bb84",
    boxShadow: "0 0 14px -4px #19bb84",
    InputLabelProps: { color: "" },
  },
  "&:hover label": {
    color: "#19bb84",
  },
}));

export const CustomColorInput = styled(MuiColorInput)(({ theme }) => ({
  input: {
    color: "white",
    
  },
  backgroundColor: "#233044",
  border: "2px solid #233044",
  borderRadius: "20px",
  textDecoration: "none",

  "&:hover": {
    borderColor: "#19bb84",
    boxShadow: "0 0 14px -4px #19bb84",
  },
  "& label": {
    color: "#ffffff",
  },
  "&:hover label": {
    color: "#19bb84",
  },

  "& .MuiInputBase-root": {
    color: "white",
  },
}));


