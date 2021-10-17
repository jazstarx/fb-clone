import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import "./SidebarRow.css"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars.githubusercontent.com/u/37382302?v=4"
                title="Jaskaran Singh" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Informantion Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="More" />
        </div>
    )
}

export default Sidebar
