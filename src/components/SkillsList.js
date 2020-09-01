import React from 'react';
import ConstructorTag from './tags/ConstructorTag';
import ConstructorCloseTag from './tags/ConstructorCloseTag';


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
