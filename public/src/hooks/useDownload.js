import {useSelector} from 'react-redux'
import download from '../helpers/downloadFile'

export default function useDownload(){
    const allFiles = useSelector(state => state.files.allFiles)

    return (id) => {
        
        if(id){
            const fileToDownload = allFiles.filter(item => item.id === id)[0]
            if(fileToDownload){
                const fileName = `${fileToDownload.name}.${fileToDownload.extention}`
                const content = fileToDownload.content
    
                download(fileName , content)
            }
        }else{
            allFiles.forEach(file => {
                const fileName = `${file.name}.${file.extention}`
                const content = file.content
    
                download(fileName , content)
            });
        }

    }

}