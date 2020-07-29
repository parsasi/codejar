import React from 'react'

export default function AddFileButton(props){
    return <a href="#" className="addFile" onClick={_ => props.setIsOpen(true)}> +</a>
}