import React from 'react'
import Fa from './Fa'
import { faSync , faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
export default function MenuItem(props){
    return (
        <a _id={props.file.id} className={`${props.current} ${props.save }  ${props.extention}`} onClick={props.menuItemClickHandler}>
            <div className="MenuItemPanes">
                <div className="MenuItemFilePane">
                    <Fa icon={props.icon}></Fa>
                    &nbsp;&nbsp;&nbsp;
                    {props.file.name}
                    <b>.{props.file.extention}</b>
                </div>
                <div className="MenuItemIconPane">
                    {props.syncing && <Fa icon={faSync} spin={true} />}
                    {(props.error && !props.syncing) && <Fa icon={faExclamationTriangle}/>}
                </div>
            </div>
        </a>
    )
}   