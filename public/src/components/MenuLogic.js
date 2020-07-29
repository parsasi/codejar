import React , {useReducer} from 'react'
import {fileReducer , initialState} from '../reducers/FileReducer'
import Menu from './Menu'
export default function MenuLogic(){
    const [allFiles , allFilesDispatch] = useReducer(fileReducer , initialState) 
    return (
        <Menu allFiles={allFiles}/>
    )
}