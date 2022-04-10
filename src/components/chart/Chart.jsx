import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Brush } from 'recharts';

export default function Chart({ title, data, dataKey, xAxis,grid }) {

  const COLORS = [];

  const getRandomColor=()=>{
      for (let i = 0; i < data.length; i++) {
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
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey={xAxis} stroke="#5550bd"/>
          <YAxis />
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <Tooltip />
          <Brush stroke="#5550bd" dataKey={xAxis}/>
          {/* {getRandomColor()}
          {data.map((entry, index) => (
              <Line type="monotone" dataKey={dataKey} stroke={COLORS[index % COLORS.length]} />
          ))} */}
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
