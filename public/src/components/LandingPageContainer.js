import React from 'react'
import logo from '../assets/logo_transparent_small.png'
import '../styles/LandingPageContainer.css'
export default function LandingPageContainer(props){
    return (
        <div className="LandingPageContainer">
            <div className="LandingPageLogoContainer">
                <img src={logo} alt="Code Jar Logo"/>
            </div>
            <div className="LandingPageButtonsContainer">
                <button className="LandingPageButton"> Create a new Workspace </button>
                <button className="LandingPageButton"> Go To a Existing Workspace </button>
            </div>
        </div>
    )
}