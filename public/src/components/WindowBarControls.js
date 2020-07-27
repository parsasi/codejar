import React from 'react'
import Fa from './Fa'
import { faSave } from '@fortawesome/free-solid-svg-icons'
export default (props) => {
    return (
        <div className="controls">
            <ul className="controlsList">
                <li className="controlListItem"><a href="#"><Fa icon={faSave}/></a></li>
            </ul>
        </div>
    )
}