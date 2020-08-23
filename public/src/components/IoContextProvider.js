import React from 'react'
import * as io from 'socket.io-client'
import IoContext from '../contexts/IoContext'

export default function IoContextProvider(props){
    const socket = io('http://localhost:8080')

    return (
        <IoContext.Provider value={socket}>
            {props.children}
        </IoContext.Provider>
    )
}