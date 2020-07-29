export function validateFileName(fileName){
    const pattern = /^[0-9a-zA-Z\.]*$/;
    return pattern.test(fileName)
}

