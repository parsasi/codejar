import React from 'react'

export default function DragZone(props){

    return (
    <div className={`DragZone ${props.isDraggedClass}`} {...props}>
        {props.children}
    </div>
    )
}