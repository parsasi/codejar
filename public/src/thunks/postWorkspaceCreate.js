import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const postFile = createAsyncThunk('workspace/create',() => {
    const serverRoute = getServerRoute()
    const results =  axios.get(`${serverRoute}ws/create`)
    return results
})
export default postFile