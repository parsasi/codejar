import React, { useEffect  , useState} from 'react'
import * as io from 'socket.io-client'
import IoContext from '../contexts/IoContext'
import getServerRoute from '../helpers/getServerRoute'
import {useSelector} from 'react-redux'
export default function IoContextProvider(props){
    const serverRoute = getServerRoute()
    const workspaceId = useSelector(state => state.workspace.workspaceId)
    const [socket , setSocket] = useState({})
    useEffect(() => {
        const socket = new io(serverRoute , {query: {
            workspaceId
        }})
        setSocket(socket)
    } , [])

    return (
        <IoContext.Provider value={socket}>
            {props.children}
        </IoContext.Provider>
    )
}