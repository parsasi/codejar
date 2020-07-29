import React , {useReducer} from 'react'
const fileInstance = {
    name : '',
    extention : '',
    lang : '',
    timeCreated : '',
    content : '',
    lastUpdated : '',
    current:false
}

const initialState = {
    currentFile : {}, 
    allFiles : []
} 

function fileReducer(state , action){
    switch(action.type){
        case 'ADD_FILE':
            const newState = {
                ...state,
                allFiles : [...state.allFiles , {...fileInstance , ...action.payload }],
                currentFile: action.payload 
            }
            return newState
        default:
            return state;
    }
} 

export {fileReducer , initialState}