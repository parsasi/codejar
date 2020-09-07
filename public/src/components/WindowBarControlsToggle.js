import React from 'react'
import Fa from './Fa'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle'
export default function WindowBarControlsToggle(props){
    return (
        <li className="controlListItem"><Toggle defaultChecked={props.checked} onChange={props.toggleChangeHandler} icons={{checked: <Fa icon={faCloudDownloadAlt} size="xs" />, unchecked:  <Fa icon={faCloudDownloadAlt} size="xs"/>}}></Toggle></li>
    )
}