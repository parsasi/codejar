import { createSlice  } from '@reduxjs/toolkit'
import hashFileContent from '../helpers/hashFileContent'
import fetchFiles from '../thunks/fetchFilesThunk'
import fetchContent from '../thunks/fetchContentThunk'
import postContent from '../thunks/postFileContent'
import postFile from '../thunks/postFileCreate'
import postFileDelete from '../thunks/postFileContent'
import postFileRename from '../thunks/postFileRename'
import createFileObj from '../helpers/createFileObj'
import fileInstance from '../helpers/fileInstance'
// const fileInstance = {
//     id: '',
//     name : '',
//     extention : '',
//     lang : '',
//     timeCreated : '',
//     content : '',
//     lastUpdated : '',
//     current:false,
//     saved : false,
//     syncing: false,
//     error : false,
//     savedHash : ''
// }

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
            const fileWithTheSameId = state.allFiles.filter(item => item.id === action.payload.id)[0]
            if(!fileWithTheSameId){
                state.allFiles.map(item => item.current = false)
                state.allFiles.unshift(action.payload)
                // state.currentFile = action.payload
            }
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
        },
        changeFileContent : (state , action) => {
            state.currentFile.content = state.currentFile.id === action.payload.id ? action.payload.content :  state.currentFile.content
            state.allFiles.map(item => item.id === action.payload.id ? item.content = action.payload.content : null)
        },
        deleteFile: (state , action) => {
            state.allFiles = state.allFiles.filter(item => item.id !== action.payload.id)
        },
        renameFile : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.payload.id){
                    item.name = action.payload.name
                    item.extention = action.payload.extention
                }
            })
        }
    },
    extraReducers : {
        [fetchFiles.pending] : (state , action) => {
            state.loadingFilesStatus = 'pending'
        },
        [fetchFiles.fulfilled] : (state , action) => {
            state.loadingFilesStatus = 'fulfilled'
            const loadedFiles = action.payload.data
            state.allFiles = state.allFiles.concat(loadedFiles.map(item => (createFileObj({name : item.name , extention : item.extention , id : item.nano_id}))))
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
            state.allFiles.map(item => {
                if(item.id === action.meta.arg){
                    item.syncing = false
                    item.error = true
                }
            })
        },
        [postContent.pending] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = true
                }
            })
        },
        [postContent.fulfilled] : (state , action) => {
            const now = new Date().toString()
            const hashed = hashFileContent(action.meta.arg.content)
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                    item.lastUpdated = now
                    item.error = false
                    item.saved = true
                    item.savedHash = hashed
                }
            })
            state.currentFile.savedHash = state.currentFile.id === action.meta.arg.nanoId && hashed
        },
        [postContent.rejected] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                    item.error = true
                }
            })
        },
        [postFile.pending] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = true
                }
            }) 
        },
        [postFile.fulfilled] : (state , action) => {
            const now = new Date()
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                    item.lastUpdated = now
                    item.error = false
                    item.justCreated = false
                }
            }) 
        },
        [postFile.rejected] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                    item.error = true
                }
            }) 
        },
        [postFileRename.pending] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = true
                }
            })
        },
        [postFileRename.fulfilled] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                }
            })
        },
        [postFileRename.rejected] : (state , action) => {
            state.allFiles.map(item => {
                if(item.id === action.meta.arg.nanoId){
                    item.syncing = false
                    item.error = true
                }
            }) 
        }
    }
})

export const { addFile , changeCurrentFileContent , changeCurrentFile , changeFileContent , deleteFile , renameFile } = filesSlice.actions

export default filesSlice.reducer
