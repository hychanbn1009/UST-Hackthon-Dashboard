import React from 'react';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSmall/WidgetSm';
import WidgetLg from '../../components/widgetLarge/WidgetLg';
import "./homepage.css";
import { UserData } from '../../userData';
let abcCompanyData = require('./companyData')

export default function Homepage() {

  const companyData = [
    {
      "complaintNumber": 200,
      "dailyActiveUser": 405,
      "companyComplaint":[
        {
          month: 'Jan',
          complaint: 324,
        },
        {
          month: 'Feb',
          complaint: 594,
        },
        {
          month: 'Mar',
          complaint: 1031,
        }, 
        {
          month: 'Apr',
          complaint: 354,
        },
        {
          month: 'May',
          complaint: 400,
        },
        {
          month: 'Jun',
          complaint: 429,
        },
        {
          month: 'Jul',
          complaint: 200,
        }],
      "top3Issue":[
          {
              keyword: "Over Time Working",
              category:"Work Life Balance"
          },
          {
              keyword: "Toilet Paper",
              category:"Facility"
          },
          {
              keyword: "Internet Issue",
              category:"Facility"
          }
      ],
      "latestComplaint":[
          {
            department: "Sales",
            category:"Internet Issue",
            emotion:"Angry",
          },
          {
            department: "Marketing",
            category:"Benefits",
            emotion:"Happy",
          }
      ]
    },
];
  
  return (
    <div className="homepage">
      {console.log(abcCompanyData)}
        <FeaturedInfo complaintNumber={companyData[0].complaintNumber} dailyActiveUser={companyData[0].dailyActiveUser}/>
        <Chart title="Complaint Analysis" data={companyData[0].companyComplaint} dataKey="complaint" xAxis="month" grid />
        <div className="homeWidgets">
          <WidgetSm top3Issue={companyData[0].top3Issue}/>
          <WidgetLg latestComplaint={companyData[0].latestComplaint}/>
        </div>
    </div>
  )
}
