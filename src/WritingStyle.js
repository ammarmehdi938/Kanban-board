import { createTheme } from "@mui/material";


const writingStyle = createTheme({
    typography:{
        fontFamily: [
      '-apple-system', 
      'BlinkMacSystemFont', 
            '"Segoe UI"', 
      'Roboto', 
      '"Helvetica Neue"', 
      'Arial', 
      'sans-serif', 
      '"Apple Color Emoji"', 
      '"Segoe UI Emoji"', 
      '"Segoe UI Symbol"', 
    ].join(','),
    }
})

export default writingStyle;