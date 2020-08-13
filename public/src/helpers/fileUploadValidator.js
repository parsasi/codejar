import sanitize from './sanitize'
import {validateFileName} from './validator'
export default function fileUploadValidator(file , options = {}){
    const maxSize = options.maxSize ? options.maxSize : 16000
    const allowedExtentions = options.allowedExtentions || []
    const preventedExtentions = options.preventedExtentions || []
    const fileName = sanitize(file.name)
    const nameValidation = validateFileName(fileName)
    const sizeValidation = file.size <= maxSize
    const extentionValidation = (allowedExtentions.length ? allowedExtentions.indexOf(file.type) >= 0 : true) && (preventedExtentions.length ? preventedExtentions.indexOf(file.type) < 0 : true)
    const errors = []
    if(nameValidation && sizeValidation && extentionValidation){
        return true
    }else{
        !nameValidation && errors.push('name')
        !sizeValidation && errors.push('size')
        !extentionValidation && errors.push('extention')
        return errors
    }
}



// lastModified: 1596650123432
// lastModifiedDate: Wed Aug 05 2020 22:25:23 GMT+0430 (Iran Daylight Time) {}
// name: "-home-parsasi-Documents-personal-code-jar-public-src-.txt"
// size: 66
// type: "text/plain"
// webkitRelativePath: ""
// __proto__: File
// length: 1
// __proto__: FileList