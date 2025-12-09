import "../N_TaskStyleComponents/UnSchedule.css";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import ErrorIcon from "@mui/icons-material/Error";

function UnScheduled() {
  return (
    <div className="main">
      <div className="unScheduleDiv">
        <h2>Un Schedule</h2>
        <KeyboardTabIcon />
      </div>
      <div className=" dragDrop">
        <ErrorIcon />
        Drag & Droptask to workload calendar
      </div>
      <div className="unScheduleDiv">
        <input type="text"></input>
      </div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
      <div className="unScheduleDiv"></div>
    </div>
  );
}
export default UnScheduled;
