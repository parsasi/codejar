import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import WorkspaceContainer from './WorkspaceContainer'
import LandingPageContainerLoigc from './LandingPageContainerLogic'
import store from '../stores/store'
import {Provider} from 'react-redux'
export default function App(props){
    return (
        <Provider store={store}>
            <Router>
                    <div className="App">
                        <Switch>
                            <Route path="/ws/:ws_id" exact component={WorkspaceContainer} />
                            <Route path="/" exact component={LandingPageContainerLoigc} />
                        </Switch>
                    </div>
            </Router>
        </Provider>

    )
}