import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
const fetchContent = createAsyncThunk('files/fetchContent',(nanoId) => {
    const ressults =  axios.get(`http://localhost:8080/ws/content` , { params : {nanoid : nanoId}})
    return ressults
})
export default fetchContent