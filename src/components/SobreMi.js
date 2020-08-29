import React from 'react';
import miFoto from '../images/mi-foto.png';
import '../stylesheets/sobreMi.scss';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import { Typewriter } from 'react-typewriting-effect';

const SobreMi = () => {
  return (
    <section className='sobreMi'>
      <div className='sobreMi__title'>
        <h2 className='sobreMi__title__title'>
          <span className='content__text'>
            <ConstructorTag tag='h1' />
            <Typewriter
              string='Sobre Mí'
              delay={100}
              stopBlinkinOnComplete
              cursor='|'
              cursorClassName='cursor'
              className='text'
            />
            <ConstructorCloseTag tag='h1' />
          </span>
        </h2>
        <div className='sobreMi__title__img'>
          <img src={miFoto} alt='Foto Alexandra López'></img>
        </div>
      </div>
      <div className='sobreMi__content'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          Mi Historia:
          <ConstructorCloseTag tag='h3' />
        </span>
        <span className='span__content'>
          <ConstructorTag tag='p' />
          Durante más de 10 años he trabajado como Técnico de RRHH en grandes
          empresas, pero nunca llegué a sentir pasión por lo que hacía debido a
          monotonía y la falta de retos diarios.
          <br></br>
          Debido a un accidente de moto, comprendí que la vida no está para
          desperdiciarla en un trabajo en el cual no me permitía crecer ni
          personal ni profesionalmente.
          <br></br>
          Durante mi recuperación descubrí el mundo de la programación. Después
          de varios cursos online de Front y viendo la infinidad de
          posibilidades que me ofrecía el sector, decidí reinventarme en Adalab.
          <ConstructorCloseTag tag='p' />
        </span>
      </div>
    </section>
  );
};

export default SobreMi;
