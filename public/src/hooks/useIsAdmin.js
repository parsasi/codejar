import { useSelector } from 'react-redux'
export default function useFetchFiles(){
    const isAdmin = useSelector(state => state.workspace.adminCode)
    return !!isAdmin
}