import React from 'react';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import SkillsList from './SkillsList';
import SkillsLogos from './SkillsLogos';
import html from '../images/logos/html_5.png';
import css from '../images/logos/css3.png';
import git from '../images/logos/git.png';
import gulp from '../images/logos/gulp.png';
import JavaScript from '../images/logos/javascript.png';
import react from '../images/logos/react.png';
import sass from '../images/logos/sass.png';
import bootstrap from '../images/logos/bootstrap.png';
import SkillsIcon from './SkillsIcon';
import { Typewriter } from 'react-typewriting-effect';

const SkillsContentTecnologies = () => {
  return (
    <div className='skills__content tecnologies'>
      <div className='skills__list'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          <Typewriter
            string='Tecnologías: '
            delay={100}
            stopBlinkinOnComplete
            cursor='|'
            cursorClassName='cursor'
            className='text'
          />
          <ConstructorCloseTag tag='h3' />
        </span>
        <span className='span__content'>
          <ConstructorTag tag='ul' />
        </span>
        <SkillsList name='HTML 5' />
        <SkillsList name='CSS || SASS' />
        <SkillsList name='Boostrap' />
        <SkillsList name='JavaScript ES6' />
        <SkillsList name='React' />
        <SkillsList name='Gulp' />
        <SkillsList name='Git' />
        <span className='span__content'>
          <ConstructorCloseTag tag='ul' />
        </span>
      </div>
      <ul className='skills__logos'>
        <li>
          <SkillsIcon img={html} altImg='HTML' />
        </li>
        <li>
          <SkillsIcon img={css} altImg='CSS' />
        </li>
        <li>
          <SkillsIcon img={sass} altImg='Sass' />
        </li>
        <li>
          <SkillsIcon img={bootstrap} altImg='Bootstrap' />
        </li>
        <li>
          <SkillsIcon img={JavaScript} altImg='JavaScript' />
        </li>
        <li>
          <SkillsIcon img={react} altImg='React' />
        </li>
        <li>
          <SkillsIcon img={gulp} altImg='Gulp' />
        </li>
        <li>
          <SkillsIcon img={git} altImg='Git' />
        </li>
      </ul>
    </div>
  );
};

export default SkillsContentTecnologies;
