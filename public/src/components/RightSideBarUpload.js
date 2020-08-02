import React from 'react'
import Fa from './Fa'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import '../styles/RightSideBarUpload.css'
export default function RightSideBarUpload(props){
    return (
        <div className="RightSideBarUpload">
            <Fa size="lg" icon={faFileUpload}/>
            <p className="RightSideBarUploadText">Upload Files</p>
        </div>
    )
}