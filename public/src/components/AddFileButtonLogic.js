import React , {useContext} from 'react'
import AddFileModalContext from '../contexts/AddFileModalContext'
import AddFileButton from './AddFileButton'

export default (props) => {
    let [isOpen , setIsOpen] = useContext(AddFileModalContext)
    return <AddFileButton setIsOpen={setIsOpen} />
}