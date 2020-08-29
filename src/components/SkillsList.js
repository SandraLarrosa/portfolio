import React from 'react';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';


const SkillsList = ({ name }) => {
  return (
    <span className='span__content'>
      <ConstructorTag tag='li' indent='__' />
      {name}
      <ConstructorCloseTag tag='li' />
    </span>
  );
};

export default SkillsList;
