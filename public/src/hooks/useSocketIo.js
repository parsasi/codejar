import React , {useContext} from 'react'
import IoContext from '../contexts/IoContext'
import { useSelector } from 'react-redux'
export default function useSocketIo(){
    const socket = useContext(IoContext)
    const workspace = useSelector(state => state.workspace.workspaceId)
    const emit = (eventName , payload) => {
        socket.emit(eventName , {
            workspace,
            ...payload
        })
    }
    const on = (eventName , callback) => {
        return socket.on && (socket.on(eventName , data => {callback(data)}))
    }
    return [emit , on]
}