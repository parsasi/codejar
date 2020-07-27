import React , {useState} from 'react'
import Fa from './Fa'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import '../styles/AddFileModalContent.css'
export default (props) => {
    let [fileName , setFileName] = useState('');
    return(
        <div className="AddFileModalContainer">
            <div className="AddFileModalInputs">
                <input value={fileName} onChange={e => setFileName(e.target.value)} type="text" className="AddFileModalInput" id="AddFileModalInput" /> 
                <button className="AddFileModalButton" onClick={e => props.addToFiles(document.querySelector('#AddFileModalInput').value)}><Fa icon={faPlus} /></button>
            </div>
            {props.validationError && (
            <div className="AddFileModalErrors">
                <p>Please enter a valid file name.</p>
            </div>
            )}
        </div>
    )
}