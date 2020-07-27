export function validateFileName(fileName){
    const pattern = /^[0-9a-zA-Z\.]*$/;
    console.log(pattern.test(fileName))
    return pattern.test(fileName)
}

