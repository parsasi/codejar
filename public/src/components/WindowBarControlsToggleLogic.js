import React , {useContext , useState , useEffect} from 'react'
import WindowBarControlsToggle from './WindowBarControlsToggle'
import IoContext from '../contexts/IoContext'
export default function WindowBarControlsToggleLogic(props){
    const [connected , setConnected] = useState(false)
    const socket = useContext(IoContext)
    useEffect(() => {
        socket.on && setConnected(socket.connected)
    } , [connected , setConnected , socket.on])

    const toggleChangeHandler = (e) => {
        if(e.target.checked){
            socket.connect()
            setConnected(true)
        }else{
            socket.disconnect()
            setConnected(false)
        }
    }
    return (
        <WindowBarControlsToggle checked={true} toggleChangeHandler={toggleChangeHandler}/>
    )
}