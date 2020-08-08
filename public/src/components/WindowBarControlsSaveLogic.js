import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import postContent from '../thunks/postFileContent'
import WindowBarControlsSave from './WindowBarControlsSave'

export default function WindowBarControlsSaveLogic(props){
    const dispatch  = useDispatch()
    const currentFile = useSelector(state => state.files.currentFile)
    const workspaceId = useSelector(state => state.workspace.workspaceId)
    function saveClickHandler(e){
        e.preventDefault()
        dispatch(postContent({nanoId : currentFile.id , content :  currentFile.content , workspaceId }))
    }
    return (
        <WindowBarControlsSave saveClickHandler={saveClickHandler} />
    )
}