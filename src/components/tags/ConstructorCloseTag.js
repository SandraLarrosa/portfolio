import React from 'react';

const ConstructorCloseTag = ({indent , tag}) => {
  return (
    <>
      <span className='span__content'>
        <span className='opacity'>{indent}</span>
        <span className='key__tag'>{`</`}</span>
        <span className='tag'>{tag}</span>
        <span className='key__tag'>{`>`}</span>
      </span>
    </>
  );
};

export default ConstructorCloseTag;