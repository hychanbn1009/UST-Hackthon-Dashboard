import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button =({type})=>{
      return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Lastest complaint</h3>
        <table className="widgetLgTable">
            <tbody>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Department</th>
                    <th className="widgetLgTh">Category</th>
                    <th className="widgetLgTh">Emotion</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Sales</span>
                    </td>
                    <td className="widgetLgCategory">Internet Issue</td>
                    <td className="widgetLgEmotion">Angry</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Marketing</span>
                    </td>
                    <td className="widgetLgCategory">Benefits</td>
                    <td className="widgetLgEmotion">Happy</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
