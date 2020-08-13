export default (name, extention , listOfFileNames) => {
    const fullFileName = name + '.' + extention
     return listOfFileNames.filter(item => item === fullFileName).length > 0 ? true : false
}