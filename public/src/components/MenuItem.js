import React from 'react'
import Fa from './Fa'
export default function MenuItem(props){
    
    return (
        <a href="#save" className={`${props.current} ${props.save} ${props.extention}`}>
            <Fa icon={props.icon}></Fa>
            &nbsp;&nbsp;&nbsp;
            {props.file.name}
            <b>.{props.file.extention}</b>
        </a>
    )
}