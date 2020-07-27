import React from 'react'

export default (props) => {
    return <a href="#" className="addFile" onClick={_ => props.setIsOpen(true)}> +</a>
}