import React from 'react'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Fa from './Fa'


export default function MenuLoading(props){
    return (
        <div className="MenuLoading"><Fa icon={faCircleNotch} spin={true} /></div>
    )
}