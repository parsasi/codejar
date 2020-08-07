import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute'
const fetchCodes = createAsyncThunk('workspace/fetchCodes',(wsId) => {
    const serverRoute = getServerRoute()
    const results =  axios.get(`${serverRoute}ws/exists` , { params : {wsid : wsId}})
    return results
})
export default fetchCodes