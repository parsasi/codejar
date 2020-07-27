import React , {useContext} from 'react'
import '../styles/ShareModalContent.css'
import StatusContext from '../contexts/StatusContext'
import ShareModalContent from './ShareModalContent'
import ShareModalContext from '../contexts/ShareModalContext'
import Modal from './Modal'
export default (props) => {
    let [, setStatus] = useContext(StatusContext)
    let [isOpen , setIsOpen] = useContext(ShareModalContext)
    function CopyCodeHandler(e , id){
        const copyText = document.getElementById(id).innerText;
        navigator.clipboard.writeText(copyText)
        .then(_ => setStatus({visible : true , text : 'Copied to the clipboard'}))
        .catch(e => setStatus({visible : true , text : 'Error copying the data'}))
    }
    return(
        <Modal open={isOpen} setIsOpen={setIsOpen} title="Share this workspace">
            <ShareModalContent publicLink="https://codejar.live/ws/public" adminLink="https://codejar.live/ws/public" CopyCodeHandler={CopyCodeHandler} />
        </Modal>
    )
}