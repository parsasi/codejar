import React from 'react'
import Fa from './Fa'
import WindowBarControlsSaveLogic from './WindowBarControlsSaveLogic'
import { faSave , faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle'
import WindowBarControlsToggleLogic from './WindowBarControlsToggleLogic'
import 'react-toggle/style.css'
export default function WindowBarControls(props){
    return (
        <div className="controls">
            <ul className="controlsList">
                <WindowBarControlsToggleLogic />
                <WindowBarControlsSaveLogic />
            </ul>
        </div>
    )
}