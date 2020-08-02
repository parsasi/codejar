import React from 'react'
import Fa from './Fa'
export default function MenuItem(props){
    return (
        <a _id={props.file.id} className={`${props.current} ${props.save} ${props.extention}`} onClick={props.menuItemClickHandler}>
            <Fa icon={props.icon}></Fa>
            &nbsp;&nbsp;&nbsp;
            {props.file.name}
            <b>.{props.file.extention}</b>
        </a>
    )
}   