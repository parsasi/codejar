import { createSlice  } from '@reduxjs/toolkit'
import fetchFiles from '../thunks/fetchFilesThunk'
import fetchContent from '../thunks/fetchContentThunk'
import postContent from '../thunks/postFileContent'
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
    syncing: false
}
export const filesSlice = createSlice({
  name: 'files',
  initialState: {
        allFiles : [],
        currentFile : fileInstance,
        loadingFilesStatus : 'idle',
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
            state.loadingFilesStatus = 'failed'
            state.error =  action.error
        },
        [fetchContent.pending] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg){
                    item.syncing = true
                }
            })
        },
        [fetchContent.fulfilled] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg){
                    item.syncing = false
                    item.content = action.payload.data.content
                }
            })
        },
        [fetchContent.rejected] : (state , action) => {
            
        },
        [postContent.pending] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = true
                }
            })
        },
        [postContent.fulfilled] : (state , action) => {
            const now = new Date()
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                    item.lastUpdated = now
                }
            })
        },
        [postContent.rejected] : (state , action) => {
            console.log(action.error)
        },
    }
})

export const { addFile , changeCurrentFileContent , changeCurrentFile } = filesSlice.actions

export default filesSlice.reducer
