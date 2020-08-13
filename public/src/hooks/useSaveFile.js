import hashFileContent from '../helpers/hashFileContent'
import {useDispatch , useSelector} from 'react-redux'
import postContent from '../thunks/postFileContent'

const useSaveFile = () => {
    const dispatch  = useDispatch()
    const currentFile = useSelector(state => state.files.currentFile)
    const workspaceId = useSelector(state => state.workspace.workspaceId)

    return () => {
        if(currentFile.id){
            const hash = hashFileContent(currentFile.content)
            if(hash !== currentFile.savedHash){
                dispatch(postContent({nanoId : currentFile.id , content :  currentFile.content , workspaceId }))
            }
        }
    }
    
}

export default useSaveFile  