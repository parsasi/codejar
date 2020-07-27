import {useReducer} from 'react'
const fileInstance = {
    name : '',
    extention : '',
    lang : '',
    timeCreated,
    content : '',
    lastUpdated,
}

const initialState = {
    currentFile, 
    allFiles : []
} 

const fileReducer = (state , action) => {
    switch(action.type){
        case 'add':
            let newFile = {...fileInstance , ...action.data}
        break;
    }
} 

export default getFileReducer = () => {
    return useReducer(fileReducer , initialState)
}