import React from 'react'
import logo from '../assets/logo_transparent_small.png'
import '../styles/LandingPageContainer.css'
export default function LandingPageContainer(props){
    return (
        <div className="LandingPageContainer">
            <div className="LandingPageLogoContainer">
                <img className="LandingPageLogo" src={logo} alt="Code Jar Logo"/>
            </div>
            <div className="LandingPageButtonsContainer">
                <button className="LandingPageButton"> CREATE A WORKSPACE </button>
                <button className="LandingPageButton"> GO TO A WORKSPACE </button>
            </div>
        </div>
    )
}