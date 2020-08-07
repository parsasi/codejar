import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import getServerRoute from '../helpers/getServerRoute';
const fetchContent = createAsyncThunk('files/fetchContent',(nanoId) => {
    const serverRoute = getServerRoute()
    const ressults =  axios.get(`${serverRoute}ws/content` , { params : {nanoid : nanoId}})
    return ressults
})
export default fetchContent