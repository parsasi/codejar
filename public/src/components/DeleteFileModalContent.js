import React from 'react'
import '../styles/DeleteFileModalContent.css'
export default function DeleteFileModalContent(props){
    return (
        <div className="DeleteFileModalContainer">
            <button className="DeleteFileModalButton" onClick={_ => props.deleteClickHandler(props.id)}>Delete</button>
            <button className="DeleteFileModalButton" onClick={_ => props.setIsOpen(false)}>Cancel</button>
        </div>
    )
}