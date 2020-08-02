import React from 'react'
import '../styles/StatusBar.css'
export default function StatusBar(props){
    return props.visible ? (
        <div className="StatusBarContainer">
            <span className="StatusBarTex">{props.text}</span>
        </div>) : (<span></span>)
}