import React from 'react';
import TypeIt from 'typeit-react';
import ConstructorTag from '../tags/ConstructorTag';
import ConstructorCloseTag from '../tags/ConstructorCloseTag';
//Styles
import 'react-typewriting-effect/dist/index.css';
import '../../stylesheets/home.scss';


const Home = () => {
  return (
    <section className='home'>
      <ConstructorTag tag='html' />
      <ConstructorTag tag='body' indent='__' />
      <ConstructorTag tag='h1' indent='____'>
        <span className='content__text'>
          <span className='text textHome'>
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type('¡Hello World!')
                  .pause(750)
                  .delete(12)
                  .pause(500)
                  .type('Hola Mundo!')
                  .pause(2000)
                  .break({ delay: 500 })
                  .type('Soy Alexandra López, ')
                  .break({ delay: 500 })
                  .type('Futura programadora')
                  .pause(750)
                  .delete(19)
                  .pause(500)
                  .type('Desarrolladora Front End.');
                return instance;
              }}
            />
          </span>
        </span>
      </ConstructorTag>
      <ConstructorCloseTag indent='____' tag='h1' />
      <ConstructorCloseTag indent='__' tag='body' />
      <ConstructorCloseTag tag='html' />
    </section>
  );
};

export default Home;
