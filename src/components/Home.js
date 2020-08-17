import React from 'react';
import '../stylesheets/home.scss';

const Home = (props) => {
  return (
    <section className='home'>
      <span className='span__content'>
        <span className='key__tag'>{`<`}</span>
        <span className='tag'>{`html`}</span>
        <span className='key__tag'>{`>`}</span>
      </span>
      <span className='span__content'>
        <span className='opacity'>{`__`}</span>
        <span className='key__tag'>{`<`}</span>
        <span className='tag'>{`body`}</span>
        <span className='key__tag'>{`>`}</span>
      </span>
      <span className='span__content'>
        <span className='opacity'>{`____`}</span>
        <span className='key__tag'>{`<`}</span>
        <span className='tag'>{`h1`}</span>
        <span className='key__tag'>{`>`}</span>
        <span className='text'>{`¡Hola Mundo!`}</span>
        <span className='key__tag'>{`</`}</span>
        <span className='tag'>{`h1`}</span>
        <span className='key__tag'>{`>`}</span>
      </span>
      <span className='span__content'>
        <span className='opacity'>{`____`}</span>
        <span className='key__tag'>{`<`}</span>
        <span className='tag'>{`h2`}</span>
        <span className='key__tag'>{`>`}</span>
        <span className='text'>{`Soy Alexandra López,`}</span>

      </span>
      <span className='span__content'>
        <span className='opacity'>{`________`}</span>
        <span className='text'>{`Desarrolladora Front End`}</span>
                <span className='key__tag'>{`</`}</span>
        <span className='tag'>{`h2`}</span>
        <span className='key__tag'>{`>`}</span>
      </span>

      <span className='span__content'>
        <span className='opacity'>{`__`}</span>
        <span className='key__tag'>{`</`}</span>
        <span className='tag'>{`body`}</span>
        <span className='key__tag'>{`>`}</span>
      </span>
      <span className='span__content'>
        <span className='key__tag'>{`</`}</span>
        <span className='tag'>{`html`}</span>
        <span className='key__tag'>{`>`}</span>
      </span>
      <span className='write'>&#160;</span>
    </section>
  );
};

export default Home;
