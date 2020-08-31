import React from 'react';
import miFoto1 from '../images/myphotos/myphoto1.jpg';
import miFoto2 from '../images/myphotos/myphoto2.jpg';
import miFoto3 from '../images/myphotos/myphoto3.JPG';
import miFoto4 from '../images/myphotos/myphoto4.JPG';
import miFoto5 from '../images/myphotos/myphoto5.JPG';
import miFoto6 from '../images/myphotos/myphoto6.jpg';
import miFoto7 from '../images/myphotos/myphoto7.JPG';
import miFoto8 from '../images/myphotos/myphoto8.JPG';
import miFoto9 from '../images/myphotos/myphoto9.jpg';
import miFoto10 from '../images/myphotos/myphoto10.jpg';
import miFoto11 from '../images/myphotos/myphoto11.JPG';
import miFoto12 from '../images/myphotos/myphoto12.jpg';
import miFoto13 from '../images/myphotos/myphoto13.jpg';
import '../stylesheets/sobreMi.scss';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import { Carousel } from 'react-responsive-carousel';
import Title from './Title';
import { Typewriter } from 'react-typewriting-effect';

const SobreMi = () => {
  return (
    <section className='sobreMi'>
      <Title name='Sobre Mí' />
      <div className='carousel__image'>
        <Carousel
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={2500}
          infiniteLoop={true}
        >
          <div className='sobreMi__img'>
            <img src={miFoto1} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto2} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto3} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto4} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto5} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto6} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto7} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto8} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto9} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto10} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto11} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto12} alt='Foto Alexandra López'></img>
          </div>
          <div className='sobreMi__img'>
            <img src={miFoto13} alt='Foto Alexandra López'></img>
          </div>
        </Carousel>
      </div>
      <div className='sobreMi__content'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          <Typewriter
            string='Mi historia: '
            delay={100}
            stopBlinkinOnComplete
            cursor='|'
            cursorClassName='cursor'
            className='text'
          />
          <ConstructorCloseTag tag='h3' />
        </span>
        <span className='span__content myHistory'>
          <ConstructorTag tag='p' />
          Durante más de 10 años he trabajado como Técnico de RRHH en grandes
          empresas, pero nunca llegué a sentir pasión por lo que hacía debido a
          la monotonía y a la falta de retos diarios.
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
