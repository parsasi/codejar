import {useDispatch , useSelector} from 'react-redux'
import postFileDelete from '../thunks/postFileDelete'
import {deleteFile} from '../reducers/FileReducer'
import useSocketIo from '../hooks/useSocketIo'
const useSaveFile = () => {
    const dispatch  = useDispatch()
    const workspaceId = useSelector(state => state.workspace.workspaceId)
    const [emit ,] = useSocketIo()
    return (id) => {
        dispatch(postFileDelete({nanoId : id , workspaceId }))
        dispatch(deleteFile({id}))
        emit('FILE_DELETED' , {id})
    }
    
}

export default useSaveFile  