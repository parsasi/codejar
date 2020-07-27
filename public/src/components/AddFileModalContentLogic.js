import React, { useContext } from 'react'
import AddFileModalContent from './AddFileModalContent'
import AddFileModalContext from '../contexts/AddFileModalContext'
import Modal from './Modal'
export default (props) => {
    const [isOpen , setIsOpen] = useContext(AddFileModalContext)
    console.log(isOpen)
    return (
        <Modal open={isOpen} setIsOpen={setIsOpen} title="Create a file">
            <AddFileModalContent />
        </Modal>
    )
}