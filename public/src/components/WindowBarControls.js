import React from 'react'
import Fa from './Fa'
import WindowBarControlsSaveLogic from './WindowBarControlsSaveLogic'
import { faSave , faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
export default function WindowBarControls(props){
    return (
        <div className="controls">
            <ul className="controlsList">
                <li className="controlListItem"><Toggle defaultChecked={true} icons={{checked: <Fa icon={faCloudDownloadAlt} size="xs" />, unchecked:  <Fa icon={faCloudDownloadAlt} size="xs"/>}}></Toggle></li>
                <WindowBarControlsSaveLogic />
            </ul>
        </div>
    )
}