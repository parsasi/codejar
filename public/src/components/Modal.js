import React , {useState} from 'react'
import ModalElement from 'react-modal'
import '../styles/Modal.css'
import Fa from './Fa'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export default function Modal(props){
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          padding: 0
        }
      };
    return (
        <ModalElement
          isOpen={props.open}
          onAfterOpen={props.onAfterOpen && props.onAfterOpen}
          style={customStyles}
          contentLabel={props.title ? props.title : ''}
        >
          <div className="ModalInner">
            <div className="ModalInnerHeader">
              <div className="ModalInnerHeaderTitle">
                <h2 className="ModalInnerHeaderTitleText">{props.title && props.title}</h2>
              </div>
              <div className="ModalInnerHeaderCloseContainer">
                <button className="ModalInnerHeaderCloseButton" onClick={() => props.setIsOpen(false)}>
                  <Fa icon={faTimes} size="lg"/>
                </button>
              </div>
            </div>
            <div className="ModalInnerContent">
              {props.children }
            </div>
          </div>
        </ModalElement>
    )
}
// <Modal open={true} title="Welcome Message"><h1>Hello World</h1></Modal>
