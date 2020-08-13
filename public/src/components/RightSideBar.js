import React from 'react'
import '../styles/RightSideBar.css'
import RightSideBarDownload from './RightSideBarDownload'
import RightSideBarUpload from './RightSideBarUpload'
export default function RightSideBar(props){
    return (
        <div className="RightSideBarContainer">
            <div className="RightSideBarSub RightSideBarTop">
                <RightSideBarDownload />
            </div>
            <div className="RightSideBarSub RightSideBarBottom">
                <RightSideBarUpload />
            </div>
        </div>
    )
}