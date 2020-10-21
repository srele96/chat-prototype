import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalWindow from './ModalWindow';

function Modal(props) {
  const div = document.createElement('div');
  div.style.cssText = `width: 100vw; height: 100vh; display: flex; 
    flex-direction: column; align-items: center; position: fixed;
    top: 0; left: 0; background: rgb(42,42,42); role='dialog'`;

  useEffect(() => {
    const modalParent = document.getElementsByTagName('body')[0];
    modalParent.appendChild(div);    
    return () => modalParent.removeChild(div);
  });

  return createPortal(
    <ModalWindow close={props.close}>
      {props.children}
    </ModalWindow>,div
  );
}

export default Modal;