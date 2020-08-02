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
            current:false,
            saved : false
        }
    },
    reducers:{
        addFile: (state, action) => {
            state.allFiles.map(item => item.current = false)
            state.allFiles.unshift(action.payload)
            state.currentFile = action.payload
        },
        changeCurrentFileContent : (state,action) => {
            state.currentFile.content = action.payload.content
            state.allFiles.map(item => item.id === state.currentFile.id ? item.content = action.payload.content : null)
        },
        changeCurrentFile : (state,action) => {
            state.allFiles.map(item => {
                item.current = item.id === action.payload.id ? true : false
            })
            state.currentFile = state.allFiles.find(item => item.id === action.payload.id)
        }
    }
})

export const { addFile , changeCurrentFileContent , changeCurrentFile } = filesSlice.actions

export default filesSlice.reducer