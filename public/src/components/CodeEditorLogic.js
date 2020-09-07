import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import CodeEditor from './CodeEditor'
import { changeFileContent , changeCurrentFileContent } from '../reducers/FileReducer'
import useCtrlS from '../hooks/useCtrlS'
import useIsAdmin from '../hooks/useIsAdmin'
import useSocketIo from '../hooks/useSocketIo'
export default function CodeEditorLogic(props){
    const isAdmin = useIsAdmin()
    useCtrlS()()
    const dispatch = useDispatch()
    const currentFile = useSelector(state => state.files.currentFile)
    const [emit , on] = useSocketIo()
    const onChange = (text) => {
        if(isAdmin){
            dispatch(changeCurrentFileContent({content : text}))
            emit('FILE_CHANGED' , {
                id : currentFile.id,
                content : text
            })
        }
    }
    // //Listening to fileChanges if this is not an admin enviroment
    (!isAdmin) && on('FILE_CHANGES' , data => dispatch(changeFileContent({id : data.id , content : data.content})))

    return (
        <CodeEditor currentFile={currentFile} onChange={onChange} />
    )
}