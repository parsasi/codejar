import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import StatusBarLogic from './StatusbarLogic'
import ShareModalContentLogic from './ShareModalContentLogic'
import AddFileModalContentLogic from './AddFileModalContentLogic'
import DeleteFileModalContentLogic from './DeleteFileModalContentLogic'
import RenameFileModalContentLogic from './RenameFileModalContentLogic'
import GlobalContextProviders from './GlobalContextProviders'
export default function EditorContainer(props){
    return (
        <div className="EditorContainer">
             <GlobalContextProviders>
                <WindowBar/>
                <MiddleRow />
                <StatusBarLogic />
                <AddFileModalContentLogic/>
                <ShareModalContentLogic/>
                <DeleteFileModalContentLogic />
                <RenameFileModalContentLogic />
            </GlobalContextProviders>
        </div>
    )
}