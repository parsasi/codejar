import React from 'react'
import SideBar from './SideBar'
import CodeEditor from './CodeEditor'
import RightSideBar from './RightSideBar'
import '../styles/MiddleRow.css'
export default function MiddleRow(props){
    return (
        <div className="MiddleRow">
            <SideBar />
            <CodeEditor />
            <RightSideBar />
        </div>
    )
}