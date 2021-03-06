import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const postFileRename = createAsyncThunk('files/renameFile',({nanoId , extention ,  name , workspaceId}) => {
    const serverRoute = getServerRoute()
    const results =  axios.post(`${serverRoute}ws/file/rename` , {nanoid : nanoId , name , extention , workspaceid : workspaceId})
    return results
})
export default postFileRename