import React from 'react';
import { Link } from 'react-router-dom';
import ConstructorTag from '../ConstructorTag';
//Styles
import '../../stylesheets/nav.scss';
//Images
import Home from '../../images/home.png';
import Proyectos from '../../images/repository.png';
import Habilidades from '../../images/engineering.png';
import SobreMi from '../../images/person_female.png';



const Nav = () => {
  return (
    <>
      <nav className='nav__content'>
        <ul className='nav__content__list--Mobile'>
          <li>
            <Link to='/'>
              <img className='content__icon' src={Home} alt='Home'></img>
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <img
                className='content__icon'
                src={Proyectos}
                alt='Proyectos'
              ></img>
            </Link>
          </li>
          <li>
            <Link to='/skills'>
              <img
                className='content__icon'
                src={Habilidades}
                alt='Habilidades'
              ></img>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <img className='content__icon' src={SobreMi} alt='Sobre Mi'></img>
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
