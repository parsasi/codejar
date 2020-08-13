import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const postFile = createAsyncThunk('workspace/postFile',({nanoId , extention ,  name , workspaceId , content }) => {
    const serverRoute = getServerRoute()
    const results =  axios.post(`${serverRoute}ws/file` , {nanoid : nanoId , name , extention , workspaceid : workspaceId , content})
    return results
})
export default postFile