import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="" alt></img>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Sam</span>
                    <span className="widgetSmUserTitle">Soft</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>Display
                </button>
            </li>
        </ul>
    </div>
  )
}
