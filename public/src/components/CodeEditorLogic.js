import React , {useContext} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import CodeEditor from './CodeEditor'
import { changeCurrentFileContent } from '../reducers/FileReducer'
import useCtrlS from '../hooks/useCtrlS'
import IoContext from '../contexts/IoContext'
import { current } from '@reduxjs/toolkit'
export default function CodeEditorLogic(props){
    const io = useContext(IoContext)
    useCtrlS()()
    const dispatch = useDispatch()
    const currentFile = useSelector(state => state.files.currentFile)
    const workspace = useSelector(state => state.workspace.workspaceId)
    const onChange = (text) => {
        dispatch(changeCurrentFileContent({content : text}))
        io.emit('FILE_CHANGED' , {
            workspace,
            id : currentFile.id,
            content : text
        })
    }
    return (
        <CodeEditor currentFile={currentFile} onChange={onChange} />
    )
}