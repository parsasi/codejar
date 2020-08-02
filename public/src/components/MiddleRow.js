import React from 'react'
import SideBar from './SideBar'
import CodeEditorLogic from './CodeEditorLogic'
import RightSideBar from './RightSideBar'
import '../styles/MiddleRow.css'
export default function MiddleRow(props){
    return (
        <div className="MiddleRow">
            <SideBar />
            <CodeEditorLogic />
            <RightSideBar />
        </div>
    )
}