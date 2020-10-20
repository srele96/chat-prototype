import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal(props) {
  const div = document.createElement('div');
  div.style.cssText = `width: 100vw; overflow-y: scroll;display: flex; 
  flex-direction: column; align-items: center;`;

  useEffect(() => {
    const modalParent = document.getElementById('page');
    modalParent.appendChild(div);    
    return () => modalParent.removeChild(div);
  });

  return createPortal(props.children, div);
}

export default Modal;