import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button =({type})=>{
      return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Lasteest complaint</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Department</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$10.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$10.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
