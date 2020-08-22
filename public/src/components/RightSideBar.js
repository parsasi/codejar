import React from 'react'
import '../styles/RightSideBar.css'
import RightSideBarDownload from './RightSideBarDownload'
import RightSideBarUploadLogic from './RightSideBarUploadLogic'
export default function RightSideBar(props){
    return (
        <div className="RightSideBarContainer">
            <div className="RightSideBarSub RightSideBarTop">
                <RightSideBarDownload />
            </div>
            <div className="RightSideBarSub RightSideBarBottom">
                <RightSideBarUploadLogic />
            </div>
        </div>
    )
}