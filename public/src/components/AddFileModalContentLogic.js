import React, { useContext , useState , useReducer } from 'react'
import AddFileModalContent from './AddFileModalContent'
import AddFileModalContext from '../contexts/AddFileModalContext'
import Modal from './Modal'
import {validateFileName } from '../helpers/validator'
import {fileReducer , initialState} from '../reducers/FileReducer'
export default function AddFileModalContentLogic(props){
    const [allFiles , allFilesDispatch] = useReducer(fileReducer , initialState)
    const [isOpen , setIsOpen] = useContext(AddFileModalContext)
    const [validationError , setValidationError] = useState(false)
    function addToFiles(text){
        if(validateFileName(text)){
            setValidationError(false)
            const now = new Date()
            allFilesDispatch({type : 'ADD_FILE' , payload : {name : text , extention : '.js' , lang : 'javascript' , content : '' , timeCreated : now , lastUpdated : now , current:true}})
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