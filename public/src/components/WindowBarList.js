import React from 'react'
import '../styles/WindowBarList.css'
import WindowBarListShare from './WindowBarListShare'
import WindowBarListAdd from './WindowBarListAdd'
export default (props) => {
    return (
        <div className="WindowBarListContainer">
            <ul className="WindowBarList">
                <WindowBarListAdd />
                <WindowBarListShare />
                <li className="WindowBarListItem"><button className="WindowBarListItemButton">Download</button></li>
            </ul>
        </div>
    )
}