import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../images/folder.png';
import Home from '../images/home.png';
import Proyectos from '../images/repository.png';
import Habilidades from '../images/engineering.png';
import SobreMi from '../images/person_female.png';
import '../stylesheets/nav.scss';

const Nav = (props) => {
  return (
    <div>
      <nav className='nav__content'>
        <ul className='nav__content__list--Mobile'>
          <div className='icon__folder'>
            <img src={Folder} alt='Folder'></img>
          </div>
          <li>
            <div className='content__icon'>
              <img src={Home} alt='Home'></img>
            </div>
          </li>
          <li>
            <div className='content__icon'>
              <img src={Proyectos} alt='Proyectos'></img>
            </div>
          </li>
          <li>
            <div className='content__icon'>
              <img src={Habilidades} alt='Habilidades'></img>
            </div>
          </li>
          <li>
            <div className='content__icon'>
              <img src={SobreMi} alt='Sobre Mi'></img>
            </div>
          </li>
        </ul>
        <ul className='nav__content__list'>
          <Link to='/'>
            <div className='content__home'>
              <img src={Home} alt='Home'></img>
            </div>
          </Link>
          <span className='content__list'>
            <li>
              <Link to='/about'>
                <span className='key__tag'>{`<`}</span>
                <span className='tag'>{`Sobre-Mi`}</span>
                <span className='key__tag'>{`/>`}</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span className='key__tag'>{`<`}</span>
                <span className='tag'>{`Habilidades`}</span>
                <span className='key__tag'>{`/>`}</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span className='key__tag'>{`<`}</span>
                <span className='tag'>{`Proyectos`}</span>
                <span className='key__tag'>{`/>`}</span>
              </Link>
            </li>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
