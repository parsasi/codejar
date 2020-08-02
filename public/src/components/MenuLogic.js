import React from 'react'
import { useSelector } from 'react-redux'
import Menu from './Menu'
export default function MenuLogic(){
    const allFiles = useSelector(state => state.files.allFiles)
    return (
        <Menu allFiles={allFiles}/>
    )
}