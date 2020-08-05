import { createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'
import WindowBarListAdd from '../components/WindowBarListAdd'
const fetchPosts = createAsyncThunk('files/fetchFiles',(wsId) => {
    const ressults =  axios.get(`http://localhost:8080/ws/files` , { params : {wsid : wsId}})
    return ressults
})
export default fetchPosts