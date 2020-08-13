import React , {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addFile} from '../reducers/FileReducer'
import DragZone from './DragZone'
import { nanoid } from '@reduxjs/toolkit'
import '../styles/DragZone.css'
import fileUploadValidator from '../helpers/fileUploadValidator'
import readFileContent from '../helpers/readFileContent'
import createFileObj from '../helpers/createFileObj'
import postFile from '../thunks/postFileCreate' 

export default function DragZoneContainer(prpos){
    const [isDraggedOver , setIsDraggedOver] = useState(false)
    const [fileStatus , setFileStatus] = useState('idle')
    const dispatch = useDispatch()
    const workspaceId = useSelector(state => state.workspace.workspaceId)

    const dragOver = (e) => {
        e.preventDefault()
    }
    const dragEnter = (e) => {
        e.preventDefault()
        setIsDraggedOver(true)
    }
    const dragLeave = (e) => {
        e.preventDefault()
        setIsDraggedOver(false)
    }
    const fileDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0];
        if(file){
            const fileValidation = fileUploadValidator(file , {maxSize : 16000})
            if(fileValidation === true){
                setFileStatus(() => 'pending')
                readFileContent(file)
                .then(results => {
                    const newFileObj = createFileObj({name : file.name , id : nanoid() , content :  results})
                    dispatch(addFile(newFileObj))
                    dispatch(postFile({name : newFileObj.name , extention :  newFileObj.extention , nanoId :  newFileObj.id , workspaceId  , content : newFileObj.content} ))
                    setFileStatus(() => 'idle')
                    setIsDraggedOver(false)
                })
                .catch( setFileStatus(() => 'error'))
            }else{
                setFileStatus(() => 'error')
            }
        }
    }
    const isDraggedClass = isDraggedOver ? 'dragged' : ''
    return (
        <DragZone
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        isDraggedClass={isDraggedClass}
        status={fileStatus}
        >
            {prpos.children}
        </DragZone>
        )
}