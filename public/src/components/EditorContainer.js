import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import StatusBarLogic from './StatusbarLogic'
import StatusContextProvider from './StatusContextProvider'
import ShareModalContentLogic from './ShareModalContentLogic'
import ShareModalContextProvider from './ShareModalContextProvider'
import AddFileModalContextProvider from './AddFileModalContextProvider'
import AddFileModalContentLogic from './AddFileModalContentLogic'
export default function EditorContainer(props){
    return (
        <div className="EditorContainer">
            <StatusContextProvider>
                <ShareModalContextProvider>
                    <AddFileModalContextProvider>
                        <WindowBar/>
                        <MiddleRow />
                        <StatusBarLogic />
                        <AddFileModalContentLogic/>
                    </AddFileModalContextProvider>
                    <ShareModalContentLogic/>
                </ShareModalContextProvider>
            </StatusContextProvider>
        </div>
    )
}