import React from 'react'
import useDownload from '../hooks/useDownload'

export default function WindowBarListDownload(props){
    const download = useDownload()


    return (
        <li className="WindowBarListItem"><button className="WindowBarListItemButton" onClick={() => download()}>Download</button></li>
    )
}