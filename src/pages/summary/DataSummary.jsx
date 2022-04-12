import React from 'react';
import "./dataSummary.css";
import ComplaintPercentage from "../../components/complaintPercentage/ComplaintPercentage";
import MeasurementChart from "../../components/measurementChart/MeasurementChart";

export default function DataSummary() {
  return (
    <div className='dataSummary'>
      <div className='homeWidgets'>
        <ComplaintPercentage/>
      </div>
    </div>
  )
}
