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
      <SkillsLogos>
        <SkillsIcon img={html} altImg='HTML' />
        <SkillsIcon img={css} altImg='CSS' />
        <SkillsIcon img={sass} altImg='Sass' />
        <SkillsIcon img={bootstrap} altImg='Bootstrap' />
        <SkillsIcon img={JavaScript} altImg='JavaScript' />
        <SkillsIcon img={react} altImg='React' />
        <SkillsIcon img={gulp} altImg='Gulp' />
        <SkillsIcon img={git} altImg='Git' />
      </SkillsLogos>
    </div>
  );
};

export default SkillsContentTecnologies;
