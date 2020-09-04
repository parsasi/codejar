import React , {useContext} from 'react'
import DeleteFileModalContext from '../contexts/DeleteFileModalContext'
import Modal from './Modal'
import {deleteFile} from '../reducers/FileReducer'
import {useDispatch , useSelector} from 'react-redux'
import DeleteFileModalContent from './DeleteFileModalContent'
export default function DeleteFileModalContentLogic(props){
    const dispatch = useDispatch()
    //If any file is to be deleted, the value of isOpen will be the id of the file. Otherwise, it will be a falsy value.
    const [isOpen , setIsOpen] = useContext(DeleteFileModalContext)
    const isOpenBool = !!isOpen
    const file = useSelector(state => state.files.allFiles.filter(item => item.id === isOpen))[0]
    const fileName = file ? `${file.name}.${file.extention}` : null;

    const deleteClickHandler = (id) => {
        dispatch(deleteFile({id}))
        setIsOpen(false)
    }

    return (
        <Modal open={isOpenBool} setIsOpen={setIsOpen} title={`Are you sure you want to delete ${fileName} ?`}>
            <DeleteFileModalContent id={isOpen} deleteClickHandler={deleteClickHandler} setIsOpen={setIsOpen} />
        </Modal>
    )
}