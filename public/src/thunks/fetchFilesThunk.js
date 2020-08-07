import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const fetchPosts = createAsyncThunk('files/fetchFiles',(wsId) => {
    const serverRoute = getServerRoute()
    const results =  axios.get(`${serverRoute}ws/files` , { params : {wsid : wsId}})
    return results
})
export default fetchPosts