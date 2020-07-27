import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return <FontAwesomeIcon icon={props.icon} size={props.size ? props.size : 's'}  />
}