import { createSlice } from '@reduxjs/toolkit'

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
        allFiles : [],
        currentFile : {
            id: '',
            name : '',
            extention : '',
            lang : '',
            timeCreated : '',
            content : '',
            lastUpdated : '',
            current:false
        }
    },
    reducers:{
        addFile: (state, action) => {
            state.allFiles.push(action.payload)
        },
    }
})

export const { addFile } = filesSlice.actions

export default filesSlice.reducer