import React from 'react';
import "./chart.css";
import { Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Brush } from 'recharts';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Chart({ title, data, dataKey, xAxis,grid,financeIndustry,allIndustry }) {

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

  const [state, setState] = React.useState({
    overTimeWorking: true,
    competitiveEnvironment: false,
    troublesomeClient: false,
    own:true,
    finance: false,
    all: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { overTimeWorking, competitiveEnvironment, troublesomeClient,finance,all,own } = state;
  const error = [overTimeWorking, competitiveEnvironment, troublesomeClient ].filter((v) => v).length !== 2;

  return (
    <div className='chartContainer'>
      <div className='chartSelectorContainer'>
        <h3>Keyword Selector</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={overTimeWorking} onChange={handleChange} name="overTimeWorking" />
            }
            label="Over Time Working"
          />
          <FormControlLabel
            control={
              <Checkbox checked={competitiveEnvironment} onChange={handleChange} name="competitiveEnvironment" />
            }
            label="Competitive environment"
          />
          <FormControlLabel
            control={
              <Checkbox checked={troublesomeClient} onChange={handleChange} name="troublesomeClient" />
            }
            label="Troublesome Client"
          />
        </FormGroup>
        <h3>Industry</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={own} onChange={handleChange} name="own" />
            }
            label="Your Company"
          />
          <FormControlLabel
            control={
              <Checkbox checked={finance} onChange={handleChange} name="finance" />
            }
            label="Finance Industry"
          />
          <FormControlLabel
            control={
              <Checkbox checked={all} onChange={handleChange} name="all" />
            }
            label="All Industry Average"
          />
        </FormGroup>
      </div>
      <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 15,
            left: 15,
            bottom: 5,
          }}
        >
          <XAxis 
          dataKey={xAxis}
          type="number"
          ticks={[1,2,3,4,5,6]}
          domain={[1, 6]}
          stroke="#5550bd"
          label="Month"
          />
          <YAxis />
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <Tooltip />
          <Legend />
          <Brush stroke="#5550bd" dataKey={xAxis}/>
          {/* {getRandomColor()}
          {data.map((entry, index) => (
              <Line type="monotone" dataKey={dataKey} stroke={COLORS[index % COLORS.length]} />
          ))} */}
          {state.overTimeWorking&&state.own?<Line connectNulls name="Company Over Time Working" data={data} type="monotone" dataKey="overTimeWorking" stroke="#8884d8"/>:("")}
          {state.competitiveEnvironment&&state.own?<Line connectNulls name="Company Competitive Environment" data={data} type="monotone" dataKey="competitiveEnvironment" stroke="#880808" />:("")}
          {state.troublesomeClient&&state.own?<Line connectNulls name="Company troublesome Client" data={data} type="monotone" dataKey="troublesomeClient" stroke="#A54B9D" />:("")}
          {state.overTimeWorking&&state.finance?<Line connectNulls  name="Financial Industry Over Time Working" data={financeIndustry} type="monotone" dataKey="overTimeWorking" stroke="#801ec4" />:("")}
          {state.competitiveEnvironment&&state.finance?<Line connectNulls data={financeIndustry} name="Financial Industry Competitive Environment" type="monotone" dataKey="competitiveEnvironment" stroke="#4334e7" />:("")}
          {state.troublesomeClient&&state.finance?<Line connectNulls data={financeIndustry} name="Financial Industry Troublesome Client" type="monotone" dataKey="troublesomeClient" stroke="#38b907" />:("")}
          {state.overTimeWorking&&state.all?<Line connectNulls data={allIndustry} name="All Industry Average Over Time Working"  type="monotone" dataKey="overTimeWorking" stroke="#801ec4" />:("")}
          {state.competitiveEnvironment&&state.all?<Line connectNulls data={allIndustry} name="All Industry Average Competitive Environment" type="monotone" dataKey="competitiveEnvironment" stroke="#9488bd" />:("")}
          {state.troublesomeClient&&state.all?<Line connectNulls data={allIndustry}  name="All Industry Average Troublesome Client" type="monotone" dataKey="troublesomeClient" stroke="#5bfa94" />:("")}
        </LineChart>
        </ResponsiveContainer>
    </div>
    </div>
  )
}
