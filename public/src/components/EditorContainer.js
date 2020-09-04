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
import DeleteFileModalContextProvider from './DeleteFileModalContextProvider'
import DeleteFileModalContentLogic from './DeleteFileModalContentLogic'
export default function EditorContainer(props){
    return (
        <div className="EditorContainer">
             <StatusContextProvider>
                <ShareModalContextProvider>
                    <AddFileModalContextProvider>
                        <DeleteFileModalContextProvider>
                            <IoContextProvider>
                                <WindowBar/>
                                <MiddleRow />
                                <StatusBarLogic />
                                <AddFileModalContentLogic/>
                                <ShareModalContentLogic/>
                                <DeleteFileModalContentLogic />
                            </IoContextProvider>
                        </DeleteFileModalContextProvider>
                    </AddFileModalContextProvider>
                </ShareModalContextProvider>
            </StatusContextProvider>
        </div>
    )
}