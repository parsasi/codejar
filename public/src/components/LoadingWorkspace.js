import React from 'react'
import '../styles/LoadingWorkspace.css'
import logo from '../assets/logo_transparent.png'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import Fa from './Fa'

export default function LoadingWorkspace(){
    return (
        <div className="LoadingWorkspace">
            <img className="LoadingWorkspaceLogo" src={logo} />
            <div className="LoadingWorkspaceLoader">
                <Fa icon={faSync} spin={true}/>
            </div>
        </div>
    )
}