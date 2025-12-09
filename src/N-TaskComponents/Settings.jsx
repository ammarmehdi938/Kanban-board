import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import "../N_TaskStyleComponents/Settings.css";
import { Button, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

function Settings() {
  const [tasks, setTasks] = useState("");
  const handleChangeTasks = (e) => {
    setTasks(e.target.value);
  };
  return (
    <div className="Settings">
      <div className="settingMainDiv settingHeader">
        <h2>Settings</h2>
        <KeyboardTabIcon />
      </div>
      <div className="settingMainDiv">
        <p>Color Tasks by</p>
        <div>
          <FormControl>
            <Select
              value={tasks}
              onChange={handleChangeTasks}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ height: "30px" }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={10}>Status</MenuItem>
              <MenuItem value={20}>Priority</MenuItem>
              <MenuItem value={30}>Task Color</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="settingMainDiv">
        <p>Show Task Name on Timeline</p>
        <Switch defaultChecked />
      </div>
      <div className="settingMainDiv">
        <p>Export WorkLoad in Excel</p>
        <Button>
          <CloudOutlinedIcon /> Download
        </Button>
      </div>
    </div>
  );
}
export default Settings;
