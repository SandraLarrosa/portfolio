import React, {useEffect, useState} from 'react';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';
import '../stylesheets/home.scss';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';

const Home = () => {
  const helloWorld = '¡Hola Mundo!';
  const myName = ' Soy Alexandra López,  Desarrolladora Front End ';
/*   const [myName, setMyName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setMyName('Soy Alexandra López, Desarrolladora Front End')
        console.log(myName);
    }, 1000)
  }, [myName]);  */

/*   let myName = '';

  const printName = () => {
    setTimeout(() => {
      myName = 'Soy Alexandra López, Desarrolladora Front End';
      console.log('Voy a Pintar', myName);
    }, 3000);
  }; */
  return (
    <section className='home'>
      <ConstructorTag tag='html' />
      <ConstructorTag tag='body' indent='__' />
      <span className='content__text'>
        <ConstructorTag tag='h1' indent='____'>
          <span className='text'>
            <Typewriter
              string={helloWorld}
              delay={100}
              stopBlinkinOnComplete
              cursor='|'
              cursorClassName='cursor'
              className='text'
            />
          </span>
        </ConstructorTag>
        <ConstructorCloseTag tag='h1' />
      </span>
      <span className='content__text'>
        <ConstructorTag tag='h2' indent='____' />
        <span className='text'>
          <Typewriter
            string={myName}
            delay={100}
            stopBlinkinOnComplete
            cursor='|'
            cursorClassName='cursor'
            className='text'
          />
        </span>
      </span>
      <ConstructorCloseTag indent='____' tag='h2' />
      <ConstructorCloseTag indent='__' tag='body' />
      <ConstructorCloseTag tag='html' />
    </section>
  );
};

export default Home;
