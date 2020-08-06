import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import postContent from '../thunks/postFileContent'
import WindowBarControlsSave from './WindowBarControlsSave'

export default function WindowBarControlsSaveLogic(props){
    const dispatch  = useDispatch()
    const currentFile = useSelector(state => state.files.currentFile)
    function saveClickHandler(e){
        e.preventDefault()
        dispatch(postContent({nanoId : currentFile.id , content :  currentFile.content}))
    }
    return (
        <WindowBarControlsSave saveClickHandler={saveClickHandler} />
    )
}