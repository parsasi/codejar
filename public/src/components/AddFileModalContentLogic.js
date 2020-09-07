import React, { useContext , useState  } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import AddFileModalContent from './AddFileModalContent'
import AddFileModalContext from '../contexts/AddFileModalContext'
import Modal from './Modal'
import {validateFileName } from '../helpers/validator'
import {addFile , changeCurrentFile} from '../reducers/FileReducer'
import sanitize from '../helpers/sanitize'
import createFileObj from '../helpers/createFileObj'
import isDuplicate from '../helpers/isDuplicate'
import postFile from '../thunks/postFileCreate' 
import useSocketIo from '../hooks/useSocketIo'
export default function AddFileModalContentLogic(props){
    const [isOpen , setIsOpen] = useContext(AddFileModalContext)
    const [validationError , setValidationError] = useState(false)
    const dispatch = useDispatch()
    const allFileNames = useSelector(state => state.files.allFiles).map(item => item.name + '.' + item.extention)
    const workspaceId = useSelector(state => state.workspace.workspaceId)
    const [emit , ] = useSocketIo()
    function addToFiles(text){
        text = sanitize(text)
        if(validateFileName(text)){
            const newFileObj = createFileObj({name : text , id : nanoid() , justCreated : true})
            if(!isDuplicate(newFileObj.name , newFileObj.extention , allFileNames)){
                setValidationError(false)
                dispatch(addFile(newFileObj))
                dispatch(changeCurrentFile({id : newFileObj.id}))
                dispatch(postFile({name : newFileObj.name , extention :  newFileObj.extention , nanoId :  newFileObj.id , workspaceId  , content : ''} ))
                emit('FILE_CREATED' , newFileObj)
                setIsOpen(_ => false)
            }else{
                setValidationError(true)
            }
        }else{
            setValidationError(true)
        }
    }
    return (
        <Modal open={isOpen} setIsOpen={setIsOpen} title="Create a file">
            <AddFileModalContent validationError={validationError} addToFiles={addToFiles}  />
        </Modal>
    )
}
