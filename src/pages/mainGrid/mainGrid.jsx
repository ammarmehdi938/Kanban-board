import React from "react";

function MainGrid() {
  return (
    <div className="main">
      <hr className="main-hr" />

      <div className="header-row">
        <h1>Resource Workload</h1>

        <ul className="main-ul">
          <li className="main-list">
            <i className="fa-solid fa-magnifying-glass-plus"></i> 2 Weeks
          </li>
          <li className="main-list">
            <i className="fa-regular fa-calendar"></i> Today
          </li>
          <li className="main-list">
            <i className="fa-solid fa-filter"></i> Filters
          </li>
          <li className="main-list">
            <i className="fa-regular fa-clock"></i> Hours{" "}
            <i className="fa-solid fa-angle-down"></i>
          </li>
          <li className="main-list">Unschedule</li>
          <li className="main-list">
            <i className="fa-solid fa-gear"></i>
          </li>
        </ul>
      </div>

      <div className="main-content-container">
        {/* Sidebar will go here */}

        <div className="main-content">
          <div>
            <div className="full-row">
              <span>June 2022</span>
            </div>

            <div className="days-container">
              {[
                "Mon 6",
                "Tue 7",
                "Wed 8",
                "Thu 9",
                "Fri 10",
                "Sat 11",
                "Sun 12",
                "Mon 13",
                "Tue 14",
                "Wed 15",
                "Thu 16",
                "Fri 17",
                "Sat 18",
                "Sun 19",
              ].map((d, i) => (
                <div key={i} className="day-cell">
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="main-data-container">
            {[1, 2, 3, 4, 5].map((c) => (
              <div key={c} className="cell">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainGrid;
