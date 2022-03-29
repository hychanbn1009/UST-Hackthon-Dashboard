import React from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSmall/WidgetSm'
import WidgetLg from '../../components/widgetLarge/WidgetLg'
import "./homepage.css"
import { UserData } from '../../userData'

export default function Homepage() {
  return (
    <div className="homepage">
        <FeaturedInfo/>
        <Chart title="Complaint Analysis" data={UserData} dataKey="complaint" xAxis="month" grid />
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
