import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../images/home.png';
import Proyectos from '../images/repository.png';
import Habilidades from '../images/engineering.png';
import SobreMi from '../images/person_female.png';
import '../stylesheets/nav.scss';
import ConstructorTag from './ConstructorTag';

const Nav = () => {
  return (
    <>
      <nav className='nav__content'>
        <ul className='nav__content__list--Mobile'>
          <li>
            <Link to='/'>
              <div className='content__icon'>
                <img src={Home} alt='Home'></img>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <div className='content__icon'>
                <img src={Proyectos} alt='Proyectos'></img>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/skills'>
              <div className='content__icon'>
                <img src={Habilidades} alt='Habilidades'></img>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <div className='content__icon'>
                <img src={SobreMi} alt='Sobre Mi'></img>
              </div>
            </Link>
          </li>
        </ul>
        <ul className='nav__content__list'>
          <li>
            <Link to='/'>
              <ConstructorTag tag='Home' />
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <ConstructorTag tag='Proyectos' />
            </Link>
          </li>
          <li>
            <Link to='/skills'>
              <ConstructorTag tag='Skills' />
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <ConstructorTag tag='Sobre-mí' />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
