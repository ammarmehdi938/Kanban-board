import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Title = () => {

    const CustomTextField = styled(TextField)(({ theme }) => ({
        input: {
            color: "white"
            
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


    return (
        <Box>
    
            <CustomTextField
                label="Title"
                id="filled-basic"
                autoFocus
                InputLabelProps={{
                    sx: {
                        color: "#ffffff",
                        "&.Mui-focused": { color: "#19bb84", "&:hover": { color: "#19bb84" } },
                    },
                }}
                variant="filled"
                InputProps={{
                    disableUnderline: "true",
                }}></CustomTextField>
                </Box>



    )
}

export default Title;