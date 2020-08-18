import React from 'react';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

const Prueba = (props) => {
  const hi = '¡Hola Mundo!';
  return (
    <div>
      <Typewriter
        string={hi}
        delay={80}
        stopBlinkinOnComplete
        cursor='_'
        className='text'
      />
    </div>
  );
};

export default Prueba;
