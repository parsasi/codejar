import React, { useContext , useState  } from 'react'
import AddFileModalContent from './AddFileModalContent'
import AddFileModalContext from '../contexts/AddFileModalContext'
import Modal from './Modal'
import {validateFileName } from '../helpers/validator'
import FilesReducerContext from '../contexts/FileReducerContext'
export default function AddFileModalContentLogic(props){
    const [isOpen , setIsOpen] = useContext(AddFileModalContext)
    const [validationError , setValidationError] = useState(false)
    const [ , allFilesDispatch] = useContext(FilesReducerContext)
    function addToFiles(text){
        if(validateFileName(text)){
            setValidationError(false)
            const now = new Date()
            allFilesDispatch({type : 'ADD_FILE' , payload : {file : {name : text , extention : '.js' , lang : 'javascript' , content : '' , timeCreated : now , lastUpdated : now , current:true}}})
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
