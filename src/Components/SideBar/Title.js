import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Title = (props) => {
  const { task, setTask , open} = props;
  const { title } = task;
  const handleTitle = (e) => {
    setTask({ ...task, title: e.target.value });
  };
  const CustomTextField = styled(TextField)(({ theme }) => ({
    input: {
      color: "white",
      width:'212px',
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
    <div>

      <Box 
      sx={{ml:'-8px',
        mt:'-40px'
      }}>
      <CustomTextField
        label="Title"
        id="filled-basic"
        onChange={(e) => handleTitle(e)}
        value={task.title}
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
        }}
        
      />
      {/* {save ? <h1>{title}</h1> : false} */}

      {/* <div>
        <Button onClick={() => setSave(true)}>save</Button>
      </div> */}
      </Box>
    </div>
  );
};

export default Title;
