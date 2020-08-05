import {configureStore } from '@reduxjs/toolkit'
import fileReducer from '../reducers/FileReducer'
import workSpaceReducer from '../reducers/WorkspaceReducer'
export default configureStore({
    reducer : {
        files: fileReducer,
        workspace : workSpaceReducer
    }
})