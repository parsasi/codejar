import React from 'react'
import '../styles/WindowBar.css'
import WindowBarList from './WindowBarList'
import WindowBarControls from './WindowBarControls'
export default (props) => {
    return (
        <div className="windowbar">
                <WindowBarList />
            <WindowBarControls />
        </div>
    )
}