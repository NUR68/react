import React from "react";
import "./topBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMagnifyingGlass,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function topBar() {
  return (
    <div className="topBar">
      <div className="topBarAdmin">
        <div className="d-flex topMenu">
          <div className="col-2 logo d-flex">
            <FontAwesomeIcon icon={faChartLine} /> <p>Admin Dashboard</p>
          </div>
          <div className="col-10">
            <div className="d-flex settingsUser">
              <div
                className="search"
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div
                className="notification"
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className="settings">
                <FontAwesomeIcon
                  icon={faGear}
                  style={{ cursor: "pointer", alignItems: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



