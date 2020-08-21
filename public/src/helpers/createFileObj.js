import getExtention from './getExtention'
import getFileLang from './getFilelang'
import fileInstance from './fileInstance'
export default ({name , extention , id , content , justCreated}) => {
    if(!extention){
        const nameAndExtention = getExtention(name)
        name = nameAndExtention.name
        extention = nameAndExtention.extention
    }
    justCreated = !!justCreated
    const now = new Date().toString()
    const lang = getFileLang(name , extention)
    const newFile = {
        ...fileInstance,
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
        savedHash : '',
        justCreated
    }
    return newFile
}