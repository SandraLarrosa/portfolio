import React from 'react';
import miFoto from '../images/mi-foto.png';
import '../stylesheets/sobreMi.scss';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import Title from './Title';

const SobreMi = () => {
  return (
    <section className='sobreMi'>
      <Title name='Sobre Mí' />
      <div className='sobreMi__img'>
        <img src={miFoto} alt='Foto Alexandra López'></img>
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
