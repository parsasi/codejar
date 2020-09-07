import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const postFileDelete = createAsyncThunk('workspace/deleteFile',({nanoId , workspaceId}) => {
    const serverRoute = getServerRoute()
    const results =  axios.delete(`${serverRoute}ws/file` , { params : {nanoid : nanoId ,  workspaceid : workspaceId }})
    return results
})
export default postFileDelete