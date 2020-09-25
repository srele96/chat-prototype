import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('profile-page');
function Modal(props) {
  const el = document.createElement('div');
  // let modalRoot = null;
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