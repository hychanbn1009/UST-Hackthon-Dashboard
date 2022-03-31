import React, { useState } from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import IssueModal from '../IssueModal/IssueModal';


export default function WidgetSm() {
    const [openModal,setOpenModal]=useState(false)

  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">Top 3 Issue</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <div className="widgetSmIssue">
                    <span className="widgetSmIssueName">Over Time Working</span>
                    <span className="widgetSmIssueCategory">Work Life Balance</span>
                </div>
                <button className="widgetSmButton" onClick={()=>setOpenModal(true)}>
                    <VisibilityIcon className="widgetSmIcon"/>Detail
                    {console.log(openModal)}
                </button>
            </li>
            <li className="widgetSmListItem">
                <div className="widgetSmIssue">
                    <span className="widgetSmIssueName">Toilet Paper</span>
                    <span className="widgetSmIssueCategory">Facility </span>
                </div>
                <button className="widgetSmButton" onClick={()=>setOpenModal(true)}>
                    <VisibilityIcon className="widgetSmIcon"/>Detail
                </button>
            </li>
            <li className="widgetSmListItem">
                <div className="widgetSmIssue">
                    <span className="widgetSmIssueName">Internet Issue</span>
                    <span className="widgetSmIssueCategory">Facility</span>
                </div>
                <button className="widgetSmButton" onClick={()=>setOpenModal(true)}>
                    <VisibilityIcon className="widgetSmIcon"/>Detail
                </button>
            </li>
        </ul>
        <IssueModal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  )
}
