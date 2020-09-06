import {useDispatch , useSelector} from 'react-redux'
import postFileDelete from '../thunks/postFileDelete'
import {deleteFile} from '../reducers/FileReducer'

const useSaveFile = () => {
    const dispatch  = useDispatch()
    const workspaceId = useSelector(state => state.workspace.workspaceId)

    return (id) => {
        dispatch(postFileDelete({nanoId : id , workspaceId }))
        dispatch(deleteFile({id}))
    }
    
}

export default useSaveFile  