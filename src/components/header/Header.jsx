import React from "react";
import "./Header.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Icon from '../../assets/images/doge.png'

export default function Header(props){

    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="sidebarToggler" onClick={()=>{props.setTogglerSideBar(!props.togglerSideBar)}}>
                        {props.togglerSideBar?<CloseIcon/>:<MenuIcon/>}
                        
                    </span>
                    <img src={Icon} className="logo"></img>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://www.meme-arsenal.com/memes/e8e1034a597cfe1790b5e5fc23f705b2.jpg" alt="" className="profilePicture"></img>
                </div>
            </div>
        </div>
    )
}