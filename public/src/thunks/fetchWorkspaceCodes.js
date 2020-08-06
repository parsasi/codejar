import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
const fetchCodes = createAsyncThunk('workspace/fetchCodes',(wsId) => {
    const ressults =  axios.get(`http://localhost:8080/ws/exists` , { params : {wsid : wsId}})
    return ressults
})
export default fetchCodes