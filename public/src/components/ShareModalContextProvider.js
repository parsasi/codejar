import React , {useState} from 'react'
import ShareModalContext from '../contexts/ShareModalContext'

export default function ShareModalContextProvider(props){
    const [isOpen , setIsOpen] = useState(false)
    return (
        <ShareModalContext.Provider value={[isOpen , setIsOpen]}>
            {props.children}
        </ShareModalContext.Provider>
    )
}