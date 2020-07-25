import React from 'react'
import WindowBar from './WindowBar'
import SideBar from './SideBar'
import CodeEditor from './CodeEditor'
import '../styles/generics.css'
export default (props) => {
    return (
        <div className="EditorContainer">
            <WindowBar/>
            <SideBar />
            <CodeEditor />
        </div>
    )
}