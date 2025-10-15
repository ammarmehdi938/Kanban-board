import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ContactSupportOutlined } from "@mui/icons-material";
import dayjs from "dayjs";

import AirplayIcon from "@mui/icons-material/Airplay";
import { Box } from "@mui/material";

const StartDate = (props) => {
  const { /*task, setTask*/ formik } = props;
  // const { startDate } = task;
  // const handleStartDate = (e) => {
  //   const date = new Date(e).toDateString();
  // setTask({ ...task, startDate: date });
  // console.log(e);
  // };

  // console.log(startDate);

  return (
    <Box
      sx={{
        width: "250px",
        mt: "20px",
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ color: "#ffffff" }}
      >
        <DatePicker
          label="Start Date"
          name="Start_Date"
          // value={formik.value ? dayjs(formik.value) : null}
          // onChange={(e) => onSubmit(e)}
          value={
            formik.values.Start_Date ? dayjs(formik.values.Start_Date) : null
          }
          onChange={(value) => {
            formik.setFieldValue(
              "Start_Date",
              value ? value.toISOString() : ""
            );
          }}
          slotProps={{
            textField: {
              variant: "filled",
              InputProps: {
                disableUnderline: true,
              },
              InputLabelProps: {
                style: { color: "#ffffff" },
              },
              InputBaseProps: {
                style: { color: "red" },
              },
              sx: {
                "&.MuiFilledInput-root": {
                  backgroundColor: "#233044",
                  color: "#ffffff",
                },
                "&:hover": {
                  borderColor: "#19ab57",
                  boxShadow: "0 0 14px -4px #19bb84",
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
