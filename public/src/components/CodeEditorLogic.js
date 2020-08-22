import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import CodeEditor from './CodeEditor'
import { changeCurrentFileContent } from '../reducers/FileReducer'
import useCtrlS from '../hooks/useCtrlS'
export default function CodeEditorLogic(props){
    useCtrlS()()
    const dispatch = useDispatch()
    const currentFile = useSelector(state => state.files.currentFile)
    const onChange = (text) => {
        dispatch(changeCurrentFileContent({content : text}))
    }
    return (
        <CodeEditor currentFile={currentFile} onChange={onChange} />
    )
}