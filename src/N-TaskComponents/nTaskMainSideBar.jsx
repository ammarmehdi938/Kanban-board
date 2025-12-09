import "./NTaskMainSideBar.css";

function N_TaskMainSideBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="mainSideBar">
        <div className="header">
          <i className="fas fa-angle-double-down"></i>
          <span>Resources (4)</span>
          <i className="fa-solid fa-angle-down"></i>

          <div
            style={{
              height: "28px",
              width: "28px",
              border: "1px solid #dcdcdc",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
        </div>

        {["Fl", "Fl", "Fl", "Fl", "Fl"].map((avatar, index) => (
          <div key={index} className="devRow">
            <i className="fa-solid fa-angle-right"></i>
            <p className="avatarImg">{avatar}</p>
            <div>
              <p className="devName">Developer Name</p>
              <p className="devInfoP">Role</p>
              <p className="devInfoP">Capacity: 118h / 80h</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default N_TaskMainSideBar;
