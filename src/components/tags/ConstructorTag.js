import React from 'react';


const ConstructorTag = (props) => {
  return (
    <>
      <span className='span__content'>
        <span className='opacity'>{props.indent}</span>
        <span className='key__tag'>{`<`}</span>
        <span className='tag'>{props.tag}</span>
        <span className='key__tag'>{`>`}</span>
        {props.children}
      </span>
    </>
  );
};

export default ConstructorTag;
