
import React from 'react'
import Fa from './Fa'
import { faEdit  } from '@fortawesome/free-solid-svg-icons'
import '../styles/RenameFileModalContent.css'
export default function RenameFileModalContent(props){
    return(
        <div className="RenameFileModalContainer">
            <div className="RenameFileModalInputs">
                <input type="text" defaultValue={props.name} className="RenameFileModalInput" id="RenameFileModalInput" /> 
                <button className="RenameFileModalButton" onClick={e => props.renameClickHandler(props.id , document.querySelector('#RenameFileModalInput').value)}><Fa icon={faEdit} /></button>
            </div>
            {props.validationError && (
            <div className="RenameFileModalErrors">
                <p>Please enter a valid file name.</p>
            </div>
            )}
        </div>
    )
}