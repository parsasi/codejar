import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import StatusBar from './StatusBar'
export default (props) => {
    return (
        <div className="EditorContainer">
            <WindowBar/>
            <MiddleRow />
            <StatusBar />
        </div>
    )
}