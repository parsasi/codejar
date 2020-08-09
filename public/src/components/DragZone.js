import React from 'react'
import Fa from './Fa'
import { faSync , faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
export default function DragZone(props){

    return (
    <div className={`DragZone ${props.isDraggedClass}`} {...props}>
        {props.children}
        {props.status === 'pending' ? <Fa icon={faSync} spin={true}/> : props.status === 'error' ? <Fa icon={faExclamationTriangle} /> : null }
    </div>
    )
}