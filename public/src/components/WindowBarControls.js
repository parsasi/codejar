import React from 'react'
import Fa from './Fa'
import { faSave , faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
export default (props) => {
    return (
        <div className="controls">
            <ul className="controlsList">
                <li className="controlListItem"><Toggle defaultChecked={true} icons={{checked: <Fa icon={faCloudDownloadAlt} size="xs" />, unchecked:  <Fa icon={faCloudDownloadAlt} size="xs"/>}}></Toggle></li>
                <li className="controlListItem"><a href="#"><Fa icon={faSave} size="lg"/></a></li>
            </ul>
        </div>
    )
}