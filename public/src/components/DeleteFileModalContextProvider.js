import React , {useState} from 'react'
import DeleteFileModalContext from '../contexts/DeleteFileModalContext'

export default function DeleteFileModalContextProvider(props){
    const [isOpen , setIsOpen ] = useState('')
    return (
        <DeleteFileModalContext.Provider value={[isOpen , setIsOpen]}>
            {props.children}
        </DeleteFileModalContext.Provider>
    )
}