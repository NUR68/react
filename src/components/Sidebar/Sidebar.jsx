import React from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faImage,
  faChartSimple,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sdB">
        <ul className="nav nav-pills flex-column mb-auto">

          <Link to="/">
            <li className="nav-item">
              <span className="nav-link buttonMenu " aria-current="page">
                <FontAwesomeIcon icon={faHouse} /> Anasayfa
              </span>
            </li>
          </Link>

          <Link to="/iletisim">
            <li>
              <span className="nav-link buttonMenu">
                <FontAwesomeIcon icon={faPhone} /> İletişim
              </span>
            </li>
          </Link>

          <Link to="/raporlar">
            <li>
              <span className="nav-link buttonMenu">
                <FontAwesomeIcon icon={faChartSimple} /> Raporlar
              </span>
            </li>
          </Link>

          <Link to="/galeri">
            <li>
              <span className="nav-link buttonMenu">
                <FontAwesomeIcon icon={faImage} /> Galeri
              </span>
            </li>
          </Link>

          <Link to="/haberler">
            <li>
              <span class="nav-link buttonMenu">
                <FontAwesomeIcon icon={faNewspaper} /> Haberler
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
