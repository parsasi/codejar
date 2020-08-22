import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit'
import fileReducer from '../reducers/FileReducer'
import workSpaceReducer from '../reducers/WorkspaceReducer'
export default configureStore({
    reducer : {
        files: fileReducer,
        workspace : workSpaceReducer
    },
    middleware: getDefaultMiddleware({serializableCheck : {ignoredActionPaths : ['meta.arg' , 'payload.config' , 'payload.request']}}) //payload.config and payload request contain non-serilized values that result in errors in the console. This will deactivate the serilize check on those properties.
})
