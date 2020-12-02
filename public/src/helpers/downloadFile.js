import { saveAs } from 'file-saver'

export default function download(fileName , content){

    const textFormat = {type: "text/plain;charset=utf-8"}
    
    const blobContent = new Blob([content] , textFormat)

    saveAs(blobContent , fileName)
}