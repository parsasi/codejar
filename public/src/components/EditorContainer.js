import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import ShareModalContentLogic from './ShareModalContentLogic'
import BottomRow from './BottomRow'
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
                <BottomRow />
                <AddFileModalContentLogic/>
                <ShareModalContentLogic/>
                <DeleteFileModalContentLogic />
                <RenameFileModalContentLogic />
            </GlobalContextProviders>
        </div>
    )
}