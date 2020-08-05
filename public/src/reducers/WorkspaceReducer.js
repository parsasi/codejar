import { createSlice  } from '@reduxjs/toolkit'

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: {
        workspaceId : '',
        ownerEmail : '',
        publicCode : '',
        adminCode : ''
    },
    reducers:{
        setworkspaceId: (state, action) => {
            state.workspaceId = action.payload.id
        },
        
    }
})

export const { setworkspaceId  } = workspaceSlice.actions

export default workspaceSlice.reducer
