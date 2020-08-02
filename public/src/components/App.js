import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import EditorContainerLogic from './EditorContainer'
export default function App(props){
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <div></div>
                    </Route>
                    <Route path="/ws/:ws_id">
                        <EditorContainerLogic />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}