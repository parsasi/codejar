import React from 'react'
import WindowBarControlsSave from './WindowBarControlsSave'
import useSaveFile from '../hooks/useSaveFile'
import useIsAdmin from '../hooks/useIsAdmin'
export default function WindowBarControlsSaveLogic(props){
    const saveFile = useSaveFile()
    const isAdmin = useIsAdmin()
    function saveClickHandler(e){
        e.preventDefault()
        saveFile()
    }
    return (
        <WindowBarControlsSave saveClickHandler={isAdmin ? saveClickHandler : null} isAdmin={isAdmin}/>
    )
}

