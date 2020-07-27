import React from 'react'
import '../styles/WindowBarList.css'
export default (props) => {
    return (
        <div className="WindowBarListContainer">
            <ul className="WindowBarList">
                <li className="WindowBarListItem"><button className="WindowBarListItemButton">Save</button></li>
                <li className="WindowBarListItem"><button className="WindowBarListItemButton">Links</button></li>
                <li className="WindowBarListItem"><button className="WindowBarListItemButton">Download</button></li>
            </ul>
        </div>
    )
}