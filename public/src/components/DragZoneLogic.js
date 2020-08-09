import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addFile} from '../reducers/FileReducer'
import DragZone from './DragZone'
import { nanoid } from '@reduxjs/toolkit'
import '../styles/DragZone.css'
import fileUploadValidator from '../helpers/fileUploadValidator'
import readFileContent from '../helpers/readFileContent'
import createFileObj from '../helpers/createFileObj'
export default function DragZoneContainer(prpos){
    const [isDraggedOver , setIsDraggedOver] = useState(false)
    const dispatch = useDispatch()
    const dragOver = (e) => {
        e.preventDefault()
        setIsDraggedOver(true)
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
        const fileValidation = fileUploadValidator(file , {maxSize : 16000})
        if(fileValidation === true){
            readFileContent(file)
            .then(results => {
                const newFile = createFileObj(file.name , nanoid() , results)
                dispatch(addFile(newFile))
            })
            .catch(console.log())
        }else{
            console.log(fileValidation)
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
        >
            {prpos.children}
        </DragZone>
        )
}