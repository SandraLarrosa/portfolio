import React from 'react';
import Title from './Title';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import '../stylesheets/skills.scss';
import SkillsList from './SkillsList';
import html from '../images/logos/html_5.png';
import css from '../images/logos/css3.png';
import git from '../images/logos/git.png';
import gulp from '../images/logos/gulp.png';
import JavaScript from '../images/logos/javascript.png';
import react from '../images/logos/react.png';
import sass from '../images/logos/sass.png';

const skills = () => {
  return (
    <section className='skills'>
      <Title name='Skills' />
      <div className='skills__content'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          Tecnologías:
          <ConstructorCloseTag tag='h3' />
        </span>
        <span className='span__content'>
          <ConstructorTag tag='ul' />
        </span>
        <SkillsList name='HTML 5' />
        <SkillsList name='CSS || SASS' />
        <SkillsList name='JavaScript ES6' />
        <SkillsList name='React || React Router' />
        <SkillsList name='Gulp' />
        <SkillsList name='Git' />
        <span className='span__content'>
          <ConstructorCloseTag tag='ul' />
        </span>
        <div className='skills__logos'>
          <img className='logosSkills' src={html} alt='HTML5' />
          <img className='logosSkills' src={css} alt='CSS' />
          <img className='logosSkills' src={sass} alt='SASS' />
          <img className='logosSkills' src={JavaScript} alt='JavaScript' />
          <img className='logosSkills' src={react} alt='React' />
          <img className='logosSkills' src={gulp} alt='Gulp' />
          <img className='logosSkills' src={git} alt='Git' />
        </div>
      </div>
    </section>
  );
};

export default skills;
