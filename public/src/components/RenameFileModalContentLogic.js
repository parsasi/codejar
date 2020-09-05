import React , {useContext} from 'react'
import RenameFileModalContext from '../contexts/RenameFileModalContext'
import Modal from './Modal'
import {deleteFile} from '../reducers/FileReducer'
import {useDispatch , useSelector} from 'react-redux'
import RenameFileModalContent from './RenameFileModalContent'
export default function RenameFileModalContentLogic(props){
    const dispatch = useDispatch()
    //If any file is to be renamed, the value of isOpen will be the id of the file. Otherwise, it will be a falsy value.
    const [isOpen , setIsOpen] = useContext(RenameFileModalContext)
    const isOpenBool = !!isOpen
    const file = useSelector(state => state.files.allFiles.filter(item => item.id === isOpen))[0]
    const fileName = file ? `${file.name}.${file.extention}` : null;

    const renameClickHandler = (id) => {
        // dispatch(deleteFile({id}))
        setIsOpen(false)
    }

    return (
        <Modal open={isOpenBool} setIsOpen={setIsOpen} title={`Renaming ${fileName} ?`}>
            <RenameFileModalContent id={isOpen} renameClickHandler={renameClickHandler} />
        </Modal>
    )
}