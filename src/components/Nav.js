import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../images/folder.png';
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
