import React from 'react';
import "./department.css";
import ComplaintPercentage from "../../components/complaintPercentage/ComplaintPercentage";
import MeasurementChart from "../../components/measurementChart/MeasurementChart";

export default function DataSummary() {
  return (
    <div className='dataSummary'>
      <div className='homeWidgets'>
        <ComplaintPercentage/>
        <MeasurementChart/>
      </div>
    </div>
  )
}