import { createTheme } from "@mui/material";

const listTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Default primary color
    },
    secondary: {
      main: '#dc004e', // Default secondary color
    },
    myCustomColor: {
      main: '#FF5733', // Define your custom color
    },
  },
});


export default listTheme;
