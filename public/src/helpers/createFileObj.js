import getExtention from './getExtention'
export default (text , id) => {
    const {name , extention} = getExtention(text)
    const now = new Date()
    const newFile = {
        id : id,
        name : name,
        extention : extention,
        lang: 'javascript',
        content : '',
        timeCreated : now,
        lastUpdated : now,
        current : true,
        saved : false
    }
    return newFile
}