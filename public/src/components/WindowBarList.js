import React from 'react'
import '../styles/WindowBarList.css'
import WindowBarListShare from './WindowBarListShare'
export default (props) => {
    return (
        <div className="WindowBarListContainer">
            <ul className="WindowBarList">
                <li className="WindowBarListItem"><button className="WindowBarListItemButton">New</button></li>
                <WindowBarListShare />
                <li className="WindowBarListItem"><button className="WindowBarListItemButton">Download</button></li>
            </ul>
        </div>
    )
}