const fileInstance = {
    name : '',
    extention : '',
    lang : '',
    timeCreated : '',
    content : '',
    lastUpdated : '',
    current:false
}
export const initialState = {
    allFiles : [],
    currentFile : {
        name : '',
        extention : '',
        lang : '',
        timeCreated : '',
        content : '',
        lastUpdated : '',
        current:false
    }
}

export const fileReducer = (state , action) => {
    switch(action.type){
        case 'ADD_FILE':
            return {
                allFiles: [...state.allFiles , action.payload.file],
                currentFile : action.payload.file
            }
        default:
            return state
    }
}
