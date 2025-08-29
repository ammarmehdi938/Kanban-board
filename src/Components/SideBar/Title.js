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
    },
    backgroundColor: "#233044",
    border: "2px solid #233044",
    borderRadius: "20px",
    textDecoration: "none",
    

    "&:hover": {
      borderColor: "#4782da",
      boxShadow: "0 0 14px -4px #4381da",
      InputLabelProps: { color: "#b79274" },
    },
    "&:hover label": {
      color: "blue",
    },
  }));

  return (
    <div>

      <Box sx={{marginLeft:'-20px'}}>
      <CustomTextField
        label="Title"
        id="filled-basic"
        onChange={(e) => handleTitle(e)}
        value={task.title}
        autoFocus
        InputLabelProps={{
          sx: {
            color: "#ffffff",
            "&.Mui-focused": { color: "blue", "&:hover": { color: "blue" } },
          },
        }}
        variant="filled"
        InputProps={{
          disableUnderline: "true",
        }}
        style={{
          marginTop: "20px",
          marginLeft: "90px",
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
