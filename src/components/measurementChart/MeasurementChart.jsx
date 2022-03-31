import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,Tooltip,Legend,} from 'recharts';
import testData from './testData';
import "./measurementChart.css"

export default function Measurement() {
  return (
    <div className="measurementChart">
        <h3 className="complaintPercentageTitle">Company Emotion Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={testData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis/>
            <Tooltip />
            <Radar name="Emotion Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
