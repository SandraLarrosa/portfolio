import React from 'react';
import '../stylesheets/nav.scss';

const Nav = (props) => {
  return (
    <div>
      <nav className='nav__content'>
        <ul className='nav__content__list'>
          <li>
            <a href='#'>
              <span className='key__tag'>{`<`}</span>
              <span className='tag'>{`Sobre-Mi`}</span>
              <span className='key__tag'>{`/>`}</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='key__tag'>{`<`}</span>
              <span className='tag'>{`Habilidades`}</span>
              <span className='key__tag'>{`/>`}</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='key__tag'>{`<`}</span>
              <span className='tag'>{`Proyectos`}</span>
              <span className='key__tag'>{`/>`}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
