export default function getExtention(fileName){
    const fileNameArray = fileName.split('.')
    const fileExtention = fileNameArray.length > 1 ? fileNameArray.pop() : ''
    const fileNameString = concatArray(fileNameArray)
    return {name : fileNameString , extention : fileExtention }
}

const concatArray = (array) => {
    return array.reduce((a,b) => a+'.'+b)
}