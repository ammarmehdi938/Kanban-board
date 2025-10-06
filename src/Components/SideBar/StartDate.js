import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ContactSupportOutlined } from "@mui/icons-material";
import dayjs from "dayjs";

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
        color: "#ffffff",
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ color: "#ffffff" }}
      >
        <DatePicker
          label="Start Date"
          value={startDate ? dayjs(startDate) : null}
          onChange={(e) => handleStartDate(e)}
          slotProps={{
            textField: {
              variant: "filled",
              InputProps: {
                disableUnderline: true,
              },

              sx: {
                "& .MuiFilledInput-input": {
                  color: "#ffffff",
                  "&::placeholder": { color: "#ffffff" },
                },
                // input::placeholder: {
                //   color: "#ffffff",
                // },
                "& .MuiInputBase-root": {
                  color: "#ffffff", // ✅ sometimes required
                },

                label: {
                  color: "#ffffff", // ✅ label color (for completeness)
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: "#233044", 
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff", // ✅ label (again, for good measure)
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
                },
              },
            },
          }}
        ></DatePicker>
      </LocalizationProvider>
    </Box>
  );
};

export default StartDate;
