import React from "react";
import "./ResourceWorkload.css";
import Settings from "./Settings";
import UnScheduled from "./UnSchedule";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

function ResourceWorkload() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [unScheduledOpen, setUnScheduledOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  const toggleUnScheduled = (open) => {
    setUnScheduledOpen(open);
  };
  return (
    <div className="rw-container">
      {/* HEADER */}
      <div className="rw-header">
        <h1>Resource Workload</h1>

        <ul className="main-ul">
          <li>
            <i className="fa-solid fa-magnifying-glass-plus main-li"></i> 2
            Weeks
          </li>
          <li>
            <i className="fa-regular fa-calendar main-li"></i> Today
          </li>
          <li>
            <i className="fa-solid fa-filter main-li"></i> Filters
          </li>
          <li>
            <i className="fa-regular fa-clock main-li"></i> Hours{" "}
            <i className="fa-solid fa-angle-down"></i>
          </li>
          <li onClick={() => toggleUnScheduled(true)}>Unschedule</li>
          <li onClick={() => toggleDrawer(true)}>
            <SettingsIcon className="main-li" />
          </li>
        </ul>
      </div>

      {/* MONTH ROW */}
      <div className="rw-sidebar-empty"></div>

      <div className="rw-month-row">
        <div className="full-row">June 2022</div>

        <div className="days-container">
          <div className="day-cell">Mon 6</div>
          <div className="day-cell">Tue 7</div>
          <div className="day-cell">Wed 8</div>
          <div className="day-cell">Thu 9</div>
          <div className="day-cell">Fri 10</div>
          <div className="day-cell">Sat 11</div>
          <div className="day-cell">Sun 12</div>
          <div className="day-cell">Mon 13</div>
          <div className="day-cell">Tue 14</div>
          <div className="day-cell">Wed 15</div>
          <div className="day-cell">Thu 16</div>
          <div className="day-cell">Fri 17</div>
          <div className="day-cell">Sat 18</div>
          <div className="day-cell">Sun 19</div>
        </div>
      </div>

      {/* ROW 1 */}
      <div className="rw-sidebar-row">
        <i className="fa-solid fa-angle-right"></i>
        <p className="avatarImg">FL</p>
        <div>
          <p className="devName">Frank Lewis</p>
          <p className="devInfoP">Product Manager</p>
          <p className="devInfoP">Capacity: 118h / 80h</p>
        </div>
      </div>

      <div className="rw-grid-row"></div>

      {/* ROW 2 */}
      <div className="rw-sidebar-row">
        <i className="fa-solid fa-angle-right"></i>
        <p className="avatarImg">DS</p>
        <div>
          <p className="devName">Diana Smiley</p>
          <p className="devInfoP">Product Manager</p>
          <p className="devInfoP">Capacity: 118h / 80h</p>
        </div>
      </div>

      <div className="rw-grid-row"></div>

      {/* ROW 3 */}
      <div className="rw-sidebar-row">
        <i className="fa-solid fa-angle-right"></i>
        <p className="avatarImg">OT</p>
        <div>
          <p className="devName">Oscar Thomsen</p>
          <p className="devInfoP">Product Manager</p>
          <p className="devInfoP">Capacity: 118h / 80h</p>
        </div>
      </div>

      <div className="rw-grid-row"></div>

      {/* ROW 4 */}
      <div className="rw-sidebar-row">
        <i className="fa-solid fa-angle-right"></i>
        <p className="avatarImg">CM</p>
        <div>
          <p className="devName">Cody McGee</p>
          <p className="devInfoP">Product Manager</p>
          <p className="devInfoP">Capacity: 118h / 80h</p>
        </div>
      </div>

      <div className="rw-grid-row"></div>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Settings />
      </Drawer>

      {/* UnSchedule drawer */}
      <Drawer
        anchor="right"
        open={unScheduledOpen}
        onClose={() => toggleUnScheduled(false)}
      >
        <UnScheduled />
      </Drawer>
    </div>
  );
}

export default ResourceWorkload;
