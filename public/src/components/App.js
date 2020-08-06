import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import WorkspaceContainer from './WorkspaceContainer'
import LandingPageContainer from './LandingPageContainer'
import store from '../stores/store'
import {Provider} from 'react-redux'
export default function App(props){
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <Switch>
                        <Route path="/ws/:ws_id">
                            <WorkspaceContainer />
                        </Route>
                         <Route path="/">
                            <LandingPageContainer />
                        </Route>
                    </Switch>
                </div>
            </Provider>
        </Router>
    )
}