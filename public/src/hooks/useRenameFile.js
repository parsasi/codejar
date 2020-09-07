import React , {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {validateFileName } from '../helpers/validator'
import createFileObj from '../helpers/createFileObj'
import useSocketIo from '../hooks/useSocketIo'
import sanitize from '../helpers/sanitize'
import isDuplicate from '../helpers/isDuplicate'
import {renameFile} from '../reducers/FileReducer'
import postFileRename from '../thunks/postFileRename'

const useRenameFile = () => {
    const dispatch = useDispatch()
    const [emit , ] = useSocketIo()
    const allFileNames = useSelector(state => state.files.allFiles).map(item => item.name + '.' + item.extention)
    const workspaceId = useSelector(state => state.workspace.workspaceId)

    
    return (id , text , onValid , onInvalid) => {
        text = sanitize(text)
        if(validateFileName(text)){
            const newFileObj = createFileObj({name : text , id : id , justCreated : false})
            if(!isDuplicate(newFileObj.name , newFileObj.extention , allFileNames)){
                dispatch(renameFile({name : newFileObj.name , extention : newFileObj.extention , id : newFileObj.id}))
                dispatch(postFileRename({name : newFileObj.name , extention : newFileObj.extention , nanoId : newFileObj.id , workspaceId : workspaceId}))
                emit('FILE_RENAMED' , newFileObj)
                onValid()
            }else{
                onInvalid()
            }
        }else{
            onInvalid()
        }
        
    }
}
export default useRenameFile