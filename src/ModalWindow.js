import React from 'react';
import { FaWindowClose } from "react-icons/fa";

function ModalWindow(props) {
  return (
    <div>
      <button style={{
        fontSize: '2rem',
        margin: '0 auto',
        border: 'none',
        borderRadius: '10px',
        background: '#2a2a2a',
        boxShadow: '-5px 5px 10px #232323, 5px -5px 10px #313131',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        padding: '10px',
        width: '80vw',
      }} onClick={props.close}>
        <FaWindowClose />
      </button>
      {props.children}
    </div>
  );
}

export default ModalWindow;