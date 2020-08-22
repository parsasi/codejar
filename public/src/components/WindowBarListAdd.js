import React from 'react'
import {Link , useHistory} from 'react-router-dom'
import getServerRoute from '../helpers/getServerRoute'
export default function WindowBarListAdd(props){
    const serverRoute = getServerRoute()
    return (
        <li className="WindowBarListItem"><a className="WindowBarListItemButton" href={serverRoute}>New Workspace</a></li>
    )
}