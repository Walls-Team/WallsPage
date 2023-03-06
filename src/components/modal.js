import React from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';

const Modal = ({ visible, setVisible }) => {
  return (
    <Popup modal trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  )
}

export default Modal
