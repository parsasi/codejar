import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import EditorContainerLogic from './EditorContainerLogic'
import LandingPageContainer from './LandingPageContainer'
import store from '../stores/store'
import {Provider} from 'react-redux'
export default function App(props){
    return (
        <Router>
            <Provider store={store}>
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
            </Provider>
        </Router>
    )
}