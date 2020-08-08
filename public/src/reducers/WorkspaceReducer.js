import { createSlice  } from '@reduxjs/toolkit'
import fetchCodes from '../thunks/fetchWorkspaceCodes'
import postWorkspaceCreate from '../thunks/postWorkspaceCreate'
export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: {
        workspaceId : '',
        ownerEmail : '',
        publicCode : '',
        adminCode : '',
        codeFetchStatus : 'idle',
        error : null,
    },
    reducers:{
        setworkspaceId: (state, action) => {
            state.workspaceId = action.payload.id
        },
        
    },
    extraReducers : {
        [fetchCodes.pending] : (state , action) => {
            state.codeFetchStatus = 'pending'
        },
        [fetchCodes.fulfilled] : (state , action) => {
            state.codeFetchStatus = 'fulfilled'
            state.adminCode = action.payload.data["admin_code"]
            state.publicCode = action.payload.data["public_code"]
            state.workspaceId = action.payload.data["admin_code"] ? action.payload.data["admin_code"] : action.payload.data["public_code"]
        },
        [fetchCodes.rejected] : (state , action ) => {
            state.codeFetchStatus = 'error'
            state.error = action.error.message
        },
        [postWorkspaceCreate.pending]: (state , action) => {
            state.codeFetchStatus = 'pending'
        },
        [postWorkspaceCreate.fulfilled]: (state , action) => {
            state.codeFetchStatus = 'fulfilled'
            state.workspaceId = action.payload.data.adminCode
        },
        [postWorkspaceCreate.rejected]: (state , action) => {
            state.codeFetchStatus = 'error'
            state.error = action.error.message
        }
    }
})

export const { setworkspaceId  } = workspaceSlice.actions

export default workspaceSlice.reducer
