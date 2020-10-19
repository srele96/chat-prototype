import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const body = document.getElementsByTagName('body')[0];
function Modal(props) {
  const div = document.createElement('div');
  div.style.cssText = `background-color: inherit; width: 100vw;\
    height: 100vh; overflow-y: scroll; top: 0; left: 0; \
    position: fixed; z-index: 1`;

  useEffect(() => {
    body.appendChild(div);    
    return () => body.removeChild(div);
  });

  return createPortal(props.children, div);
}

export default Modal;