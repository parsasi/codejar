import getExtention from './getExtention'
import getFileLang from './getFilelang'
export default ({name , extention , id , content , }) => {
    if(!extention){
        const nameAndExtention = getExtention(name)
        name = nameAndExtention.name
        extention = nameAndExtention.extention
    }
    const now = new Date().toString()
    const lang = getFileLang(name , extention)
    const newFile = {
        id : id,
        name : name,
        extention : extention,
        lang: lang,
        content : content,
        timeCreated : now,
        lastUpdated : now,
        current : false,
        saved : false,
        syncing : false,
        error : false,
        savedHash : ''
    }
    return newFile
}