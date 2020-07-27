import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import StatusBarLogic from './StatusbarLogic'
import StatusContextProvider from './StatusContextProvider'
import ShareModalContentLogic from './ShareModalContentLogic'
import ShareModalContextProvider from './ShareModalContextProvider'
export default (props) => {
    return (
        <div className="EditorContainer">
            <StatusContextProvider>
                <ShareModalContextProvider>
                    <WindowBar/>
                    <MiddleRow />
                    <StatusBarLogic />
                    <ShareModalContentLogic/>
                </ShareModalContextProvider>
            </StatusContextProvider>
        </div>
    )
}