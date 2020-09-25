import React from 'react';

const PageModalMiddleware = React.forwardRef((props, ref) => {
  return(
    <div>
      <button onClick={() => console.log(ref)}>Click</button>
      {/* <button onClick={() => ref.}>cl</button> */}
    </div>
  );
});

// export default PageModalMiddleware;