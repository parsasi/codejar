import React , {useContext} from 'react'
import '../styles/ShareModalContent.css'
import {useSelector} from 'react-redux'
import StatusContext from '../contexts/StatusContext'
import ShareModalContent from './ShareModalContent'
import ShareModalContext from '../contexts/ShareModalContext'
import Modal from './Modal'
import getServerRoute from '../helpers/getServerRoute' 
export default function ShareModalContentLogic(props){
    let [, setStatus] = useContext(StatusContext)
    let [isOpen , setIsOpen] = useContext(ShareModalContext)
    const serverRoute = getServerRoute()
    const {publicCode , adminCode} = useSelector(state => state.workspace)
    const publicUrl = `${serverRoute}ws/${publicCode}`
    const adminUrl = `${serverRoute}ws/${adminCode}`
    function CopyCodeHandler(e , id){
        const copyText = document.getElementById(id).innerText;
        navigator.clipboard.writeText(copyText)
        .then(_ => setStatus({visible : true , text : 'Copied to the clipboard'}))
        .catch(e => setStatus({visible : true , text : 'Error copying the data'}))
    }
    return(
        <Modal open={isOpen} setIsOpen={setIsOpen} title="Share this workspace">
            <ShareModalContent publicLink={publicUrl} adminLink={adminUrl} isAdmin={!!adminCode} CopyCodeHandler={CopyCodeHandler} />
        </Modal>
    )
}