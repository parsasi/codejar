import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
const postContent = createAsyncThunk('workspace/postContent',({nanoId , content}) => {
    const results =  axios.post(`http://localhost:8080/ws/content` , {nanoid : nanoId , content : content})
    return results
})
export default postContent