import React from 'react';
import miFoto from '../images/mi-foto.png';
import '../stylesheets/sobreMi.scss';

const SobreMi = (props) => {
  return (
    <section className='sobreMi'>
      <div className='sobreMi__title'>
        <h2 className='sobreMi__title__title'>
          <span className='span__content'>
            <span className='key__tag'>{`<`}</span>
            <span className='tag'>{`h1`}</span>
            <span className='key__tag'>{`>`}</span>
            <span className='text'>{`Sobre Mí`}</span>
            <span className='key__tag'>{`</`}</span>
            <span className='tag'>{`h1`}</span>
            <span className='key__tag'>{`>`}</span>
          </span>
        </h2>
        <div className='sobreMi__title__img'>
          <img src={miFoto} alt='Foto Alexandra López'></img>
        </div>
      </div>
      <div className='sobreMi__content'>
        <span className='span__content'>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`h3`}</span>
          <span className='key__tag'>{`>`}</span>
          <span className='text strong'>{`MI HISTORIA: `}</span>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`h3`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`p`}</span>
          <span className='key__tag'>{`>`}</span>
          <span className='text'>{`Durante más de 10 años he trabajado como Técnico de RRHH en grandes empresas, pero nunca llegué a sentir pasión por lo que hacía debido a monotonía y la falta de retos diarios.`}</span>
          <p className='text'>{`Debido a un accidente de moto, comprendí que la vida no está para desperdiciarla en un trabajo en el cual no me permitía crecer ni personal ni profesionalmente.`}</p>
          <p className='text'>{`Durante mi recuperación descubrí el mundo de la programación. Después de varios cursos online de Front y viendo la infinidad de posibilidades que me ofrecía el sector, decidí reinventarme en Adalab. `}</p>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`p`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`h3`}</span>
          <span className='key__tag'>{`>`}</span>
          <span className='text strong'>{`UN POQUITO MÁS SOBRE MÍ:  `}</span>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`h3`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`ul`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='opacity'>{`___`}</span>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`li`}</span>
          <span className='key__tag'>{`>`}</span>
          <span className='text'>{`Soy una apasionada de las motos y de conocer lugares nuevos.`}</span>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`li`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='opacity'>{`___`}</span>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`li`}</span>
          <span className='key__tag'>{`>`}</span>
          <span className='text'>{`Me gusta programar y crear cosas nuevas`}</span>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`li`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='opacity'>{`___`}</span>
          <span className='key__tag'>{`<`}</span>
          <span className='tag'>{`li`}</span>
          <span className='key__tag'>{`>`}</span>
          <span className='text'>{`Me encanta seguir aprendiendo para poder seguir creciendo día tras día y conseguir superarme un poquito más`}</span>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`li`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
        <span className='span__content'>
          <span className='key__tag'>{`</`}</span>
          <span className='tag'>{`ul`}</span>
          <span className='key__tag'>{`>`}</span>
        </span>
      </div>
      <span className='write'>&#160;</span>
    </section>
  );
};

export default SobreMi;