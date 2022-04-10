import React, { useEffect } from 'react';
import "./complaintPercentage.css";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';
import testData from "./testData";

export default function ComplaintPercentage() {
    const COLORS = [];

    const getRandomColor=()=>{
        for (let i = 0; i < testData.length; i++) {
            const color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
            if (!(color in COLORS)){
              COLORS.push(color)
            }
            else{
              i--
            }
        }
    }

  return (
    <div className="complaintPercentage">
        <h3 className="complaintPercentageTitle">Complaint %</h3>
        <div className="complaintPercentageChart">
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
            <Pie
                dataKey="value"
                startAngle={360}
                endAngle={0}
                data={testData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
            >
            {getRandomColor()}
            {testData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip />
            <Legend />
            </PieChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}
