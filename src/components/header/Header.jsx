import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from "../Chart/BarChart";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {
  //faChartLine,
  //faMagnifyingGlass,
  //faBell,
  //faGear,
//} from "@fortawesome/free-solid-svg-icons";

export default function header() {
    return(
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="bi col-5">
                        <BarChart/>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}