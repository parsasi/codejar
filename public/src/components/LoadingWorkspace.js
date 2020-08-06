import React from 'react'
import '../styles/LoadingWorkspace.css'
import logo from '../assets/logo_transparent_sq.png'

export default function LoadingWorkspace(){
    return (
        <div className="LoadingWorkspace">
            <img className="LoadingWorkspaceLogo" src={logo} />
        </div>
    )
}