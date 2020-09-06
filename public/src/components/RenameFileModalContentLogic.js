import React , {useContext , useState} from 'react'
import RenameFileModalContext from '../contexts/RenameFileModalContext'
import {renameFile} from '../reducers/FileReducer'
import Modal from './Modal'
import {useDispatch , useSelector} from 'react-redux'
import {validateFileName } from '../helpers/validator'
import createFileObj from '../helpers/createFileObj'
import useSocketIo from '../hooks/useSocketIo'
import RenameFileModalContent from './RenameFileModalContent'
import sanitize from '../helpers/sanitize'
import isDuplicate from '../helpers/isDuplicate'
import postFileRename from '../thunks/postFileRename'
export default function RenameFileModalContentLogic(props){
    const dispatch = useDispatch()
    //If any file is to be renamed, the value of isOpen will be the id of the file. Otherwise, it will be a falsy value.
    const [isOpen , setIsOpen] = useContext(RenameFileModalContext)
    //If isOpen contains a string isOpenBool will return a truthy value so that the modal opens
    const isOpenBool = !!isOpen
    //Grabs the file object with the id passed to the modal(passed inside isOpen)
    const file = useSelector(state => state.files.allFiles.filter(item => item.id === isOpen))[0]
    const fileName = file ? `${file.name}.${file.extention}` : null;

    const [validationError , setValidationError] = useState(false)

    //Grabs all the files and extention for checking duplicats
    const allFileNames = useSelector(state => state.files.allFiles).map(item => item.name + '.' + item.extention)

    const workspaceId = useSelector(state => state.workspace.workspaceId)
    const [emit , ] = useSocketIo()
    const renameClickHandler = (id , text) => {
        //sanitizes the text before any validation
        text = sanitize(text)
        if(validateFileName(text)){
            const newFileObj = createFileObj({name : text , id : id , justCreated : false})
            if(!isDuplicate(newFileObj.name , newFileObj.extention , allFileNames)){
                setValidationError(false)
                dispatch(renameFile({name : newFileObj.name , extention : newFileObj.extention , id : newFileObj.id}))
                dispatch(postFileRename({name : newFileObj.name , extention : newFileObj.extention , nanoId : newFileObj.id , workspaceId : workspaceId}))
                emit('FILE_RENAMED' , newFileObj)
                setIsOpen(_ => false)
            }else{
                setValidationError(true)
            }
        }else{
            setValidationError(true)
        }
        // dispatch(deleteFile({id}))
    }

    return (
        <Modal open={isOpenBool} setIsOpen={setIsOpen} title={`Renaming ${fileName} ?`}>
            <RenameFileModalContent validationError={validationError} name={fileName} id={isOpen} renameClickHandler={renameClickHandler} />
        </Modal>
    )
}