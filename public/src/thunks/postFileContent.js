import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
const postContent = createAsyncThunk('workspace/postContent',({nanoId , content , workspaceId}) => {
    const results =  axios.post(`http://localhost:8080/ws/content` , {nanoid : nanoId , content : content , workspaceid : workspaceId})
    return results
})
export default postContent