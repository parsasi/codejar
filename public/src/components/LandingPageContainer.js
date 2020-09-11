import React from 'react'
import logoText from '../assets/logo_transparent_hori_small.png'
import '../styles/LandingPageContainer.css'
import azureLogo from '../assets/azure.png'
import nodeLogo from '../assets/node.png'
import reactLogo from '../assets/react.png'
import reduxLogo from '../assets/redux.png'
import LandingSample1 from '../assets/LandingSample1.png'
import LandingSample2 from '../assets/LandingSample2.png'
import LandingSample3 from '../assets/LandingSample3.png'
export default function LandingPageContainer(props){
    // return (
    //     <div className="LandingPageContainer">
    //         <div className="LandingPageLogoContainer">
    //             <img className="LandingPageLogo" src={logo} alt="Code Jar Logo"/>
    //         </div>
    //         <div className="LandingPageButtonsContainer">
    //             <button className="LandingPageButton" > CREATE A WORKSPACE </button>
    //             <button className="LandingPageButton"> GO TO A WORKSPACE </button>
    //         </div>
    //     </div>
    // )
    return (
            <div className="LandingPageContainer">
                <span style={{display : "none"}}>Landing template taken from https://codepen.io/genarocolusso/pen/bZJRov</span>
                <section class="one">
                    <header>
                        <logomenu>
                        <ul>
                            <li class="logo"><img className="LandingPageLogoText" src={logoText} alt="CodeJar"/></li>
                        </ul>
                        </logomenu>
                        <infosmenu>
                        <ul>
                            <li class="btn"><a target="_blank" href="https://github.com/parsasi/codejar">Github</a></li>
                        </ul>
                        </infosmenu>
                    </header>
                    <div class="bighero">
                        <button className="LandingPageCreateButton" onClick={props.newWorkspaceHandler}> Create a workspace</button>
                    </div>
                    </section>
                    <section class="sponsors">
                    <div class="list">
                        <div>
                            <a href="http://reactjs.org/"  class="imgsponsor"target="_blank">
                                    <img
                                    src={reactLogo}
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://redux.js.org/" class="imgsponsor" target="_blank">
                                <img
                                    src={reduxLogo}
                                />
                            </a>
                        </div>
                        <div>
                            <a href="http://nodejs.org/" class="imgsponsor" target="_blank">
                                <img
                                    src={nodeLogo}
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://azure.microsoft.com/" class="imgsponsor" target="_blank">
                                <img
                                    src={azureLogo}
                                />
                            </a>
                        </div>
                    </div>
                    </section>
                    <section class="infos">
                    <div class="content">
                        <div class="grid allcenter">
                        <div class="float-md-50 wimg">
                            <img
                            src={LandingSample3}
                            />
                        </div>
                        <div class="float-md-50 winfo">
                            <h1 class="title">Create instantly</h1>
                            <p class="description">
                            Create a workspace with a click of a button. No account needed. No questions asked.
                            </p>
                        </div>
                        </div>
                        <div class="grid allcenter">
                        <div class="float-md-50 wimg">
                            <img
                            src={LandingSample1}
                            />
                        </div>
                        <div class="float-md-50 winfo">
                            <h1 class="title">Share rapidly</h1>
                            <p class="description">
                                Let people know you're coding. Share your public link.
                            </p>
                        </div>
                        </div>
                        <div class="grid allcenter">
                        <div class="float-md-50 wimg">
                            <img
                            src={LandingSample2}
                            />
                        </div>
                        <div class="float-md-50 winfo">
                            <h1 class="title">Need Privacy?</h1>
                            <p class="description">
                            Turn your live sharing off. No one will know a thing.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}