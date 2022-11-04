import React from 'react';
import "./reports.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from "../Chart/BarChart";

export default function Reports() {
  return (
    <div className="">
    <div className="container">
        <div className="row">
            <div className="bir col-5">
                <BarChart/>
            </div>
        </div>
    </div>
</div>
  )
}