import getExtention from './getExtention'
import getFileLang from './getFilelang'
export default (text , id , content = '') => {
    const {name , extention} = getExtention(text)
    const now = new Date()
    const lang = getFileLang(name , extention)
    const newFile = {
        id : id,
        name : name,
        extention : extention,
        lang: lang,
        content : content,
        timeCreated : now,
        lastUpdated : now,
        current : true,
        saved : false,
        syncing : false,
        error : false
    }
    return newFile
}