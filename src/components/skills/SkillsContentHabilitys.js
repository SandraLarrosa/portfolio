import React from 'react';
import { Typewriter } from 'react-typewriting-effect';
import ConstructorTag from '../tags/ConstructorTag';
import ConstructorCloseTag from '../tags/ConstructorCloseTag';
import SkillsList from './SkillsList';
import SkillsIcon from './SkillsIcon';
//Logos
import figma from '../../images/logos/figma.png';
import github from '../../images/logos/github.png';
import slack from '../../images/logos/slack.png';
import trello from '../../images/logos/trello.png';
import npm from '../../images/logos/npm.png';
import visualStudio from '../../images/logos/visual_studio.png';
import gulp from '../../images/logos/gulp.png';

const SkillsContentHabilitys = () => {
  const timeTypeWritter = 100;
  return (
    <div className='skills__content habilitys'>
      <div className='skills__list'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          <Typewriter
            string='Herramientas:'
            delay={timeTypeWritter}
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
        <SkillsList name='GitHub' />
        <SkillsList name='Visual Studio Code' />
        <SkillsList name='Npm' />
        <SkillsList name='Gulp' />
        <SkillsList name='Trello' />
        <SkillsList name='Slack' />
        <SkillsList name='Figma' />
        <SkillsList name='Zeplin' />
        <span className='span__content'>
          <ConstructorCloseTag tag='ul' />
        </span>
      </div>
      <ul className='skills__logos'>
        <li>
          <SkillsIcon img={github} altImg='GitHub' />
        </li>
        <li>
          <SkillsIcon img={visualStudio} altImg='Visual Studio' />
        </li>
        <li>
          <SkillsIcon img={npm} altImg='npm' />
        </li>
        <li>
          <SkillsIcon img={gulp} altImg='Gulp' />
        </li>
        <li>
          <SkillsIcon img={trello} altImg='Trello' />
        </li>
        <li>
          <SkillsIcon img={slack} altImg='Slack' />
        </li>
        <li>
          <SkillsIcon img={figma} altImg='Figma' />
        </li>
      </ul>
    </div>
  );
};

export default SkillsContentHabilitys;
