import React from 'react'
import Fa from './Fa'
import '../styles/RightSideBarDownload.css'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import useDownload from '../hooks/useDownload'

export default function RightSideBarDownload(props){

    const download = useDownload()

    return (
        <div className="RightSideBarDownload" onClick={_ => download()}>
            <Fa size="lg" icon={faFileDownload}/>
            <p className="RightSideBarDownloadText">Download Files</p>
        </div>
    )
}