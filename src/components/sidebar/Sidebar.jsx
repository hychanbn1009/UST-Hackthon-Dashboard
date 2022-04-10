import React from 'react';
import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className={'sidebar '+props.togglerSideBar}>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Company</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <HomeIcon className="sidebarIcon"/>Company 
                        </li>
                    </Link>
                    <Link to="company/department" className="link">
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>Department
                        </li>
                    </Link>
                </ul>
                <h3 className="sidebarTitle">Client</h3>
                <ul className="sidebarList">
                    <Link to="/client" className="link">
                        <li className="sidebarListItem">
                            <HomeIcon className="sidebarIcon"/>Client
                        </li>
                    </Link>
                    <Link to="/client/summary" className="link">
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>Summary
                        </li>
                    </Link>
                    <Link to="/client/list" className="link">
                        <li className="sidebarListItem">
                            <PeopleAltIcon className="sidebarIcon"/>Client List
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
