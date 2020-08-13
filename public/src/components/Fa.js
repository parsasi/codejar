import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Fa(props){
    return <FontAwesomeIcon icon={props.icon} size={props.size ? props.size : 'sm'} spin={props.spin} />
}