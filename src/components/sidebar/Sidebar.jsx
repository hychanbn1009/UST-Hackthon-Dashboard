import React from 'react';
import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HomeIcon className="sidebarIcon"/>Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className="sidebarIcon"/>Summary
                    </li>
                </ul>
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PeopleAltIcon className="sidebarIcon"/>Members
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
