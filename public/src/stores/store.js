import {configureStore } from '@reduxjs/toolkit'
import fileReducer from '../reducers/FileReducer'

export default configureStore({
    reducer : {
        files: fileReducer
    }
})