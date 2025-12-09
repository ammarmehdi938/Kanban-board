import { Link } from "react-router-dom";
import "./N_TaskSideBar.css";
import AxiosInterceptors from "../Interceptors/AxiosInterceptors";

function N_TaskSideBar() {
  return (
    <div className="sideBar">
      <img src="nTask Logo Full-512.png" alt="logo" className="logo" />
      <hr className="sideBarHr" />

      <div className="sideSection">
        <div className="sideOrg">
          <p className="avatar orange">A</p>
          <div className="orgInfo">
            <p className="organization">Organization</p>
            <p className="sub">Acme Corporation</p>
          </div>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        <div className="sideOrg">
          <p className="avatar yellow">B</p>
          <div className="orgInfo">
            <p className="organization">Workspace</p>
            <p className="sub">Business Development</p>
          </div>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <ul className="sideBarMenu">
        <li className="sideBarList">
          <i className="fa-solid fa-chart-line sideBarIcon"></i> Reporting
        </li>
        <li className="sideBarList">
          <Link to="/Resource Workload" className="linkItem">
            <i className="fa-solid fa-users-gear sideBarIcon"></i>
            Resource Workload
          </Link>
        </li>
        <li className="sideBarList">
          <i className="fa-solid fa-bolt sideBarIcon"></i> Quick Access
        </li>

        <hr className="sideBarHr" />

        <li className="sideBarList">
          <i className="fa-solid fa-users-gear sideBarIcon"></i> Project
        </li>
        <li className="sideBarList boards">
          <Link to="/boards" className="linkItem">
            <i className="fa-solid fa-table-columns sideBarIcon"></i> Boards
          </Link>
        </li>
        <li className="sideBarList">
          <i className="fa-solid fa-list-check sideBarIcon"></i> Tasks
        </li>
        <li className="sideBarList ">
          <i className="fa-solid fa-handshake sideBarIcon"></i> Meetings
        </li>
        <li className="sideBarList">
          <i className="fa-solid fa-business-time sideBarIcon"></i> Timesheets
        </li>
        <li className="sideBarList">
          <i className="fa-solid fa-bug sideBarIcon"></i> Issues
        </li>

        <hr className="sideBarHr" />

        <li className="sideBarList">
          <Link to="/SignUp" className="linkItem">
            <i className="fa-solid fa-sliders sideBarIcon"></i>
            {/* Customize Menu */}
            Sign up
          </Link>
        </li>
      </ul>

      {/* Footer Button */}
      <button className="sideBarButton">
        <i className="fa-solid fa-phone-volume sideBarIcon"></i> Talk to Sales
      </button>

      <h1>
        <AxiosInterceptors />
      </h1>
      {/* Footer Info */}
      <div className="sideBarFooter">
        <p className="avatar green">FL</p>
        <div>
          <p className="footerName">Frank Lewis</p>
          <p className="footerRole">Team Owner</p>
        </div>
      </div>
      <AxiosInterceptors />
    </div>
  );
}

export default N_TaskSideBar;
