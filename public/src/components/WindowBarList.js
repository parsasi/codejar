import React from 'react'
import '../styles/WindowBarList.css'
import WindowBarListShare from './WindowBarListShare'
import WindowBarListAdd from './WindowBarListAdd'
import WindowBarListDownload from './WindowBarListDownload'
export default function WindowBarList(props){
    return (
        <div className="WindowBarListContainer">
            <ul className="WindowBarList">
                <WindowBarListAdd />
                <WindowBarListShare />
                <WindowBarListDownload />
            </ul>
        </div>
    )
}