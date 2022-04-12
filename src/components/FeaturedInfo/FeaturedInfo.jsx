import React from 'react'
import "./featuredinfo.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo(props) {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredContainer">
                <span className="featuredNumber">$16.5M</span>
                <span className="featuredRate">1M<ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Daily Active User</span>
            <div className="featuredContainer">
                <span className="featuredNumber">{props.dailyActiveUser}</span>
                <span className="featuredRate">11<ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Number of Complaint</span>
            <div className="featuredContainer">
                <span className="featuredNumber">{props.complaintNumber}</span>
                <span className="featuredRate">-20<ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
