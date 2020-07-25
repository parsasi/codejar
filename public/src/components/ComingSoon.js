import React from 'react'
import '../styles/ComingSoon.css'
import logo from '../assets/logo_transparent.png'
export default (props) => {
    return (
        <div className="ComingSoonContainer">
            <div className="ComingSoonLogo">
                <img className="ComingSoonLogoImg" src={logo} alt="CodeJar logo"/>
                <h1 className="ComingSoonText">is right around the corner...</h1>
            </div>
        </div>
    )
} 