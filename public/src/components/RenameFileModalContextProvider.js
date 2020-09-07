import React , {useState} from 'react'
import RenameFileModalContext from '../contexts/RenameFileModalContext'
export default function RenameFileModalContextProvider(props){
    const [isOpen , setIsOpen] = useState(false)
    return (
        <RenameFileModalContext.Provider value={[isOpen , setIsOpen]}>
            {props.children}
        </RenameFileModalContext.Provider>
    )
}