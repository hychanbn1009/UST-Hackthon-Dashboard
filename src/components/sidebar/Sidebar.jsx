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
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <HomeIcon className="sidebarIcon"/>Home
                        </li>
                    </Link>
                    <Link to="/summary" className="link">
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>Summary
                        </li>
                    </Link>
                </ul>
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <Link to="/department" className="link">
                        <li className="sidebarListItem">
                            <PeopleAltIcon className="sidebarIcon"/>Members
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
