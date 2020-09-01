import React from 'react';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import { Typewriter } from 'react-typewriting-effect';
//Styles
import '../../stylesheets/title.scss';
import '../../stylesheets/home.scss';


const Title = ({ name }) => {
  return (
    <h2 className='title'>
      <span className='content__text'>
        <ConstructorTag tag='h1' />
         <Typewriter
          string={name}
          delay={100}
          stopBlinkinOnComplete
          cursor='|'
          cursorClassName='cursor'
          className='text'
        /> 
        <ConstructorCloseTag tag='h1' />
      </span>
    </h2>
  );
};

export default Title;
