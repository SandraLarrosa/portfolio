import React from 'react';
import '../stylesheets/nav.scss';

const Nav = (props) => {
  return (
    <div>
      <nav className="nav__content">
        <ul className='nav__content__list'>
          <li>
            <span className='key__tag'>{`<`}</span>
            <span className='tag'>{`Sobre-Mi`}</span>
            <span className='key__tag'>{`/>`}</span>
          </li>
          <li>
            <span className='key__tag'>{`<`}</span>
            <span className='tag'>{`Habilidades`}</span>
            <span className='key__tag'>{`/>`}</span>
          </li>
          <li>
            <span className='key__tag'>{`<`}</span>
            <span className='tag'>{`Proyectos`}</span>
            <span className='key__tag'>{`/>`}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
