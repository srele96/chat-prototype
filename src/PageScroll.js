import React from 'react';

function PageScroll(props) {
  return (
    <div style={{
      width: '100vw',
      height: '85vh',
      overflowY: 'auto'
    }}>
      {props.children}
    </div>
  );
}

export default PageScroll;