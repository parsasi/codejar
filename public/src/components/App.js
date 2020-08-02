import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import EditorContainerLogic from './EditorContainer'
import LandingPageContainer from './LandingPageContainer'
export default function App(props){
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <LandingPageContainer />
                    </Route>
                    <Route path="/ws/:ws_id">
                        <EditorContainerLogic />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}