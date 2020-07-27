import React, { useContext , useState } from 'react'
import AddFileModalContent from './AddFileModalContent'
import AddFileModalContext from '../contexts/AddFileModalContext'
import Modal from './Modal'
import {validateFileName } from '../helpers/validator'
export default (props) => {
    const [isOpen , setIsOpen] = useContext(AddFileModalContext)
    const [validationError , setValidationError] = useState(false)
    function addToFiles(text){
        validateFileName(text) ? setValidationError(false) : setValidationError(true)
    }
    return (
        <Modal open={isOpen} setIsOpen={setIsOpen} title="Create a file">
            <AddFileModalContent validationError={validationError} addToFiles={addToFiles}  />
        </Modal>
    )
}