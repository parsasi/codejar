import React , {useContext , useEffect} from 'react'
import StatusContext from '../contexts/StatusContext'
import StatusBar from './StatusBar'
export default (props) => {
    const [status , setStatus] = useContext(StatusContext)
    useEffect(() => {
        setTimeout(() => setStatus({...status , text : '' , visible : false}) , 6000)
    } , [status , setStatus])
    return (<StatusBar visible={status.visible} text={status.text} />)
}