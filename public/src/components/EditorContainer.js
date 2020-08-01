import React from 'react'
import WindowBar from './WindowBar'
import MiddleRow from './MiddleRow'
import '../styles/generics.css'
import StatusBarLogic from './StatusbarLogic'
import StatusContextProvider from './StatusContextProvider'
import ShareModalContentLogic from './ShareModalContentLogic'
import ShareModalContextProvider from './ShareModalContextProvider'
import AddFileModalContextProvider from './AddFileModalContextProvider'
import AddFileModalContentLogic from './AddFileModalContentLogic'
import store from '../stores/store'
import {Provider} from 'react-redux'
export default function EditorContainer(props){
    return (
        <div className="EditorContainer">
            <Provider store={store}>
                <StatusContextProvider>
                    <ShareModalContextProvider>
                        <AddFileModalContextProvider>
                                <WindowBar/>
                                <MiddleRow />
                                <StatusBarLogic />
                                <AddFileModalContentLogic/>
                                <ShareModalContentLogic/>
                        </AddFileModalContextProvider>
                    </ShareModalContextProvider>
                </StatusContextProvider>
            </Provider>
        </div>
    )
}