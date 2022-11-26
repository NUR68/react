import React from 'react';
import "./reports.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from "../Chart/BarChart";
import Kendoui from './Kendoui';
import DataTable from './DataTable';
export default function Reports() {
  return (
    <div className="">
    <div className="container">
        <div className="row">
            <div className="bir col-5">
                <BarChart/>
            </div>
            <div className="üc col-5">
                <Kendoui/>
            </div>
            <div className="dr col-12">
                <DataTable/>
            </div>
        </div>
    </div>
</div>
  )
}