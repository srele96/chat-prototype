import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementsByTagName('body')[0];
function Modal(props) {
  const el = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  });

  return(
    ReactDOM.createPortal(
      props.children,
      modalRoot
    )
  );
}

export default Modal;