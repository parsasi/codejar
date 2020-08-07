import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
const postFile = createAsyncThunk('workspace/postFile',({nanoId , extention ,  name , workspaceId , }) => {
    const results =  axios.post(`http://localhost:8080/ws/file` , {nanoid : nanoId , name , extention , workspaceid : workspaceId})
    return results
})
export default postFile