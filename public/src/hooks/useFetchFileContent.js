import {useDispatch} from 'react-redux'
import fetchFileContent from '../thunks/fetchContentThunk'

export default function useFetchFileContent(){
    const dispatch = useDispatch()
    return (id) => {
        dispatch(fetchFileContent(id))
    }
}