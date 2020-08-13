import { useSelector , useDispatch } from 'react-redux'
import fetchFiles from '../thunks/fetchFilesThunk'
export default function useFetchFiles(){
    const wsId = useSelector(state => state.workspace.workspaceId)
    const dispatch = useDispatch()
    return () => {
        dispatch(fetchFiles(wsId))
    }
}