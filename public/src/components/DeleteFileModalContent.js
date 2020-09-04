import React from 'react'

export default function DeleteFileModalContent(props){
    return (
        <div class="DeleteFileModalContainer">
            <button onClick={_ => props.deleteClickHandler(props.id)}>Delete</button>
            <button onClick={_ => props.setIsOpen(false)}>Cancel</button>
        </div>
    )
}