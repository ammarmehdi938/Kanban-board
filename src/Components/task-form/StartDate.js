import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ContactSupportOutlined } from "@mui/icons-material";
import dayjs from "dayjs";

import AirplayIcon from "@mui/icons-material/Airplay";
import { Box } from "@mui/material";

const StartDate = (props) => {
  const { formik } = props;

  return (
    <Box
      sx={{
        width: "250px",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          name="Start_Date"
          value={
            formik.values.Start_Date ? dayjs(formik.values.Start_Date) : null
          }
          onChange={(value) => {
            formik.setFieldValue(
              "Start_Date",
              value ? value.toISOString() : ""
            );
          }}
          sx={{
            border: "2px solid #233044",

            mt: "20px",
            borderRadius: "20px",
            backgroundColor: "#233044",

            "&:hover": {
              borderColor: "#19ab57",
              boxShadow: "0 0 14px -4px #19bb84",
            },
            "& .MuiInputLabel-root": {
              // Default label color
              color: "#ffffff",
            },
            "&:hover .MuiInputLabel-root": {
              // Label color on hover
              color: "#19ab57",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              // Label color when focused
              color: "#19ab57",
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
