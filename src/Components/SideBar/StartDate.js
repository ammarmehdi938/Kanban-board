import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ContactSupportOutlined } from "@mui/icons-material";

import AirplayIcon from "@mui/icons-material/Airplay";
import { Box } from "@mui/material";

const StartDate = (props) => {
  const { task, setTask } = props;
  const { startDate } = task;
  const handleStartDate = (e) => {
    const date = new Date(e).toDateString();
    setTask({ ...task, startDate: date });
    console.log(e);
  };

  return (
    <Box
      sx={{
        width: "250px",
        mt: "20px",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          onChange={(e) => handleStartDate(e)}
          sx={{
            border: "#233044 solid blue",
            borderRadius: "20px",
            backgroundColor: "#233044",

            "&:hover": {
              borderColor: "#19bb84",
              boxShadow: "0 0 14px -4px #19bb84",
            },

            "& .MuiInputLabel-root": {
              // Default label color
              color: "#ffffff",
            },
            "&:hover .MuiInputLabel-root": {
              // Label color on hover
              color: "#19bb84",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              // Label color when focused
              color: "#19bb84",
            },
          }}
          slotProps={{
            textField: {
              variant: "filled",
              InputProps: {
                disableUnderline: "true",
              },
            },
          }}
        ></DatePicker>
      </LocalizationProvider>
    </Box>
  );
};

export default StartDate;
