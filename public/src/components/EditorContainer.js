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
import IoContextProvider from './IoContextProvider'

export default function EditorContainer(props){
    return (
        <div className="EditorContainer">
             <StatusContextProvider>
                <ShareModalContextProvider>
                    <AddFileModalContextProvider>
                            <IoContextProvider>
                                <WindowBar/>
                                <MiddleRow />
                                <StatusBarLogic />
                                <AddFileModalContentLogic/>
                                <ShareModalContentLogic/>
                            </IoContextProvider>
                    </AddFileModalContextProvider>
                </ShareModalContextProvider>
            </StatusContextProvider>
        </div>
    )
}