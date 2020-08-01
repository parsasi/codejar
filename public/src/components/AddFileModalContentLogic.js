import React, { useContext , useState  } from 'react'
import {useDispatch} from 'react-redux'
import AddFileModalContent from './AddFileModalContent'
import AddFileModalContext from '../contexts/AddFileModalContext'
import Modal from './Modal'
import {validateFileName } from '../helpers/validator'
import {addFile} from '../reducers/FileReducer'
import sanitize from '../helpers/sanitize'
import getExtention from '../helpers/getExtention'
export default function AddFileModalContentLogic(props){
    const [isOpen , setIsOpen] = useContext(AddFileModalContext)
    const [validationError , setValidationError] = useState(false)
    const dispatch = useDispatch()
    function addToFiles(text, extention, lang){
        text = sanitize(text)
        if(validateFileName(text)){
            getExtention(text)
            setValidationError(false)
            const now = new Date()
            const newFile = {
                name : text,
                extention : extention || '.js',
                lang: lang || 'javascript',
                content : '',
                timeCreated : now,
                lastUpdated : now,
                current : true
            }
            console.log(addFile)
            dispatch(addFile(newFile))
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
