import { createSlice  } from '@reduxjs/toolkit'
import fetchFiles from '../thunks/fetchFilesThunk'

const fileInstance = {
    id: '',
    name : '',
    extention : '',
    lang : '',
    timeCreated : '',
    content : '',
    lastUpdated : '',
    current:false,
    saved : false,
    loaded: false
}
export const filesSlice = createSlice({
  name: 'files',
  initialState: {
        allFiles : [],
        currentFile : fileInstance,
        loadingFileStatus : 'idle',
        error : null
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
    },
    extraReducers : {
        [fetchFiles.pending] : (state , action) => {
            state.loadingFilesStatus = 'pending'
        },
        [fetchFiles.fulfilled] : (state , action) => {
            state.loadingFilesStatus = 'fulfilled'
            const loadedFiles = action.payload.data
            state.allFiles = state.allFiles.concat(loadedFiles.map(item => ({...fileInstance , name : item.name , extention : item.extention , id : item.nano_id})))
        },
        [fetchFiles.rejected] : (state , action) => {
            state.loadingFileStatus = 'failed'
            state.error =  action.error
        }
    }
})

export const { addFile , changeCurrentFileContent , changeCurrentFile } = filesSlice.actions

export default filesSlice.reducer
