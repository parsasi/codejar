import React from 'react'
import WindowBarControlsSave from './WindowBarControlsSave'
import useSaveFile from '../hooks/useSaveFile'

export default function WindowBarControlsSaveLogic(props){
    const saveFile = useSaveFile()

    function saveClickHandler(e){
        e.preventDefault()
        saveFile()
    }
    return (
        <WindowBarControlsSave saveClickHandler={saveClickHandler} />
    )
}

