import {useSelector} from 'react-redux'
import download from '../helpers/downloadFile'

export default function useDownload(){
    const allFiles = useSelector(state => state.files.allFiles)

    return (id) => {
        
        const fileToDownload = allFiles.filter(item => item.id === id)[0]
        if(fileToDownload){
            const fileName = `${fileToDownload.name}.${fileToDownload.extention}`
            const content = fileToDownload.content

            download(fileName , content)
        }
    }

}