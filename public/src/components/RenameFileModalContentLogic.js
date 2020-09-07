import React , {useContext , useState } from 'react'
import RenameFileModalContext from '../contexts/RenameFileModalContext'
import Modal from './Modal'
import {useDispatch , useSelector} from 'react-redux'
import RenameFileModalContent from './RenameFileModalContent'
import useRenameFile from '../hooks/useRenameFile'

export default function RenameFileModalContentLogic(props){
    //If any file is to be renamed, the value of isOpen will be the id of the file. Otherwise, it will be a falsy value.
    const [isOpen , setIsOpen] = useContext(RenameFileModalContext)
    //If isOpen contains a string isOpenBool will return a truthy value so that the modal opens
    const isOpenBool = !!isOpen
    //Grabs the file object with the id passed to the modal(passed inside isOpen)
    const file = useSelector(state => state.files.allFiles.filter(item => item.id === isOpen))[0]
    const fileName = file ? `${file.name}.${file.extention}` : null;

    const renameFile = useRenameFile()
    
    const [validationError , setValidationError] = useState(false)

    //Grabs all the files and extention for checking duplicats
    // const allFileNames = useSelector(state => state.files.allFiles).map(item => item.name + '.' + item.extention)
    const onValid = () => {
        setValidationError(false)
        setIsOpen(_ => false)
    }

    const onInvalid = () => {
        setValidationError(true)
    }

    const renameClickHandler = (id , text) => {
        renameFile(id , text , onValid , onInvalid)

    }

    return (
        <Modal open={isOpenBool} setIsOpen={setIsOpen} title={`Renaming ${fileName} ?`}>
            <RenameFileModalContent validationError={validationError} name={fileName} id={isOpen} renameClickHandler={renameClickHandler} />
        </Modal>
    )
}