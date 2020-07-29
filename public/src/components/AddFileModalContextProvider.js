import React , {useState} from 'react'
import AddFileModalContext from '../contexts/AddFileModalContext'

export default function AddFileModalContextProvider(props){
    const [isOpen , setIsOpen ] = useState(false)
    return (
        <AddFileModalContext.Provider value={[isOpen , setIsOpen]}>
            {props.children}
        </AddFileModalContext.Provider>
    )
}