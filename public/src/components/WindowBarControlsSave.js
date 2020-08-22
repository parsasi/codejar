import React from 'react'
import { faSave  } from '@fortawesome/free-solid-svg-icons'
import Fa from './Fa'
export default function WindowBarControlsSave(props){
    return (
        <li className={`controlListItem ${!props.isAdmin && 'deactivated'}`} onClick={props.saveClickHandler}><a><Fa icon={faSave} size="lg"/></a></li>
    )
}