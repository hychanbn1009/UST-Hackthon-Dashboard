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
            month: 1,
            "overTimeWorking": 288,
            "troublesomeClient": 110,
            "competitiveEnvironment": 18
        },
        {
            month: 2,
            "overTimeWorking": 333,
            "troublesomeClient": 153,
            "competitiveEnvironment": 25
        },
        {
            month: 3,
            "overTimeWorking": 276,
            "troublesomeClient": 182,
            "competitiveEnvironment": 81
        },
        {
          month: 4,
          "overTimeWorking": 369,
          "troublesomeClient": 98,
          "competitiveEnvironment": 55
        }, 
        {
          month: 5,
          "overTimeWorking": 329,
          "troublesomeClient": 118,
          "competitiveEnvironment": 50
        },
        {
          month: 6,
          "overTimeWorking": 497,
          "troublesomeClient": 178,
          "competitiveEnvironment": 52
        },
      ],
      "top3Issue":[
          {
              keyword: "Over Time Working",
              category:"Work Life Balance"
          },
          {
            keyword: "Competitive environment ",
            category:"Work Environment"
          },
          {
              keyword: "Troublesome Client",
              category:"Client"
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

const allIndustry=
    {"companyComplaint":[
      {
          month: 1,
          "overTimeWorking": 312,
          "troublesomeClient": 167,
          "competitiveEnvironment": 38
      },
      {
          month: 2,
          "overTimeWorking": 366,
          "troublesomeClient": 153,
          "competitiveEnvironment": 56
      },
      {
          month: 3,
          "overTimeWorking": 173,
          "troublesomeClient": 96,
          "competitiveEnvironment": 10
      },
      {
        month: 4,
        "overTimeWorking": 360,
        "troublesomeClient": 52,
        "competitiveEnvironment": 79
      }, 
      {
        month: 5,
        "overTimeWorking": 498,
        "troublesomeClient": 86,
        "competitiveEnvironment": 81
      },
      {
        month: 6,
        "overTimeWorking": 482,
        "troublesomeClient": 189,
        "competitiveEnvironment": 19
      },
    ],
  }


const financeIndustry=
  {"companyComplaint":[
    {
        month: 1,
        "overTimeWorking": 486,
        "troublesomeClient": 91,
        "competitiveEnvironment": 73
    },
    {
        month: 2,
        "overTimeWorking": 244,
        "troublesomeClient": 63,
        "competitiveEnvironment": 75
    },
    {
        month: 3,
        "overTimeWorking": 276,
        "troublesomeClient": 110,
        "competitiveEnvironment": 32
    },
    {
      month: 4,
      "overTimeWorking": 251,
      "troublesomeClient": 137,
      "competitiveEnvironment": 52
    }, 
    {
      month: 5,
      "overTimeWorking": 408,
      "troublesomeClient": 126,
      "competitiveEnvironment": 24
    },
    {
      month: 6,
      "overTimeWorking": 406,
      "troublesomeClient": 133,
      "competitiveEnvironment": 30
    },
  ],
}

  
  return (
    <div className="homepage">
        <FeaturedInfo complaintNumber={companyData[0].complaintNumber} dailyActiveUser={companyData[0].dailyActiveUser}/>
        <Chart title="Complaint Analysis" data={companyData[0].companyComplaint} xAxis="month" grid financeIndustry={financeIndustry.companyComplaint} allIndustry={allIndustry.companyComplaint}/>
        <div className="homeWidgets">
          <WidgetSm top3Issue={companyData[0].top3Issue}/>
          <WidgetLg latestComplaint={companyData[0].latestComplaint}/>
        </div>
    </div>
  )
}
