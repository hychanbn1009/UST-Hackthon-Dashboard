import React from 'react';
import Selector from "../../components/selector/Selector"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Company() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Number of Complaint</span>
            <div className="featuredContainer">
                <span className="featuredNumber">78</span>
                <span className="featuredRate">15<ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Daily Active User</span>
            <div className="featuredContainer">
                <span className="featuredNumber">357</span>
                <span className="featuredRate">11<ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
