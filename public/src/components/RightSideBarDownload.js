import React from 'react'
import Fa from './Fa'
import '../styles/RightSideBarDownload.css'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    return (
        <div className="RightSideBarDownload">
            <Fa size="lg" icon={faFileDownload}/>
            <p className="RightSideBarDownloadText">Download Files</p>
        </div>
    )
}