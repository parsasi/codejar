export default function readFileContent(file){
    return new Promise((resolve , reject) => {
        const fileReader = new FileReader()
        fileReader.readAsText(file)
        console.log('File Reader : ' , fileReader)

        fileReader.onerror = event => {
            fileReader.abort()
            reject(fileReader.error)
        }

        fileReader.onload = event => {
            resolve(event.target.result)
        }
    })
}