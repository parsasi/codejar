import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import StatusBarLogic from './StatusbarLogic'
import StatusContextProvider from './StatusContextProvider'
export default (props) => {
    return (
        <div className="EditorContainer">
            <StatusContextProvider>
                <WindowBar/>
                <MiddleRow />
                <StatusBarLogic />
            </StatusContextProvider>
        </div>
    )
}