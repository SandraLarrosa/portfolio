import React from 'react';

const SkillsLogos = (props) => {
  return (
    <div >
      <ul className='skills__logos'>
        <li>{props.children}</li>
      </ul>
    </div>
  );
};

export default SkillsLogos;
