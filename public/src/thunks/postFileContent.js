import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const postContent = createAsyncThunk('workspace/postContent',({nanoId , content , workspaceId}) => {
    const serverRoute = getServerRoute()
    const results =  axios.post(`${serverRoute}ws/content` , {nanoid : nanoId , content : content , workspaceid : workspaceId})
    return results
})
export default postContent