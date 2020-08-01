import React , { useReducer } from 'react'
import {fileReducer , initialState} from '../reducers/FileReducer'
import FileReducerContext from '../contexts/FileReducerContext'
export default function FileReducerContextProvider(props){
    const [allFiles , allFilesDispatch] = useReducer(fileReducer , initialState)
    return (
        <FileReducerContext.Provider value={[allFiles , allFilesDispatch]}>
            {props.children}
        </FileReducerContext.Provider>
    )
}