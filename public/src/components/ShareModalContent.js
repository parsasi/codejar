import React from 'react'
import Fa from './Fa'
import { faCopy  } from '@fortawesome/free-solid-svg-icons'
import '../styles/ShareModalContent.css'
export default function ShareModalContent(props){
    return(
        <div className="ShareModalContantContainer">
            <div className="ShareModalContantSub">
                <span className="ShareModalContentText">Public Link:</span><div className="ShareModalContentSubLink"><span id="ShareModalContentPublic">{props.publicLink}</span><button onClick={(e) => props.CopyCodeHandler(e , 'ShareModalContentPublic')} className="ShareModalContentSubCopy"><Fa onClick={() => this.parentElement.click()} icon={faCopy}/></button></div>
            </div>
            <div className="ShareModalContantSub">
                <span className="ShareModalContentText">Admin Link:</span><div className="ShareModalContentSubLink"><span id="ShareModalContentAdmin">{props.adminLink}</span><button onClick={(e) => props.CopyCodeHandler(e , 'ShareModalContentAdmin')} className="ShareModalContentSubCopy"><Fa icon={faCopy}/></button></div>
            </div>
        </div>
    )
}