
import React,{useState} from 'react' 
import StatusContext from '../contexts/StatusContext'
export default function StatusBarContextProvider(props){
    const [status , useStatus] = useState({visible : false , text : ''})
    return (
        <StatusContext.Provider value={[status , useStatus]}>
            {props.children}
        </StatusContext.Provider>
    )
}