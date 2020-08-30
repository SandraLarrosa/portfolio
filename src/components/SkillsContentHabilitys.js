import React from 'react';
import ConstructorTag from './ConstructorTag';
import ConstructorCloseTag from './ConstructorCloseTag';
import SkillsList from './SkillsList';
import SkillsLogos from './SkillsLogos';
import figma from '../images/logos/figma.png';
import github from '../images/logos/github.png';
import slack from '../images/logos/slack.png';
import trello from '../images/logos/trello.png';
import npm from '../images/logos/npm.png';
import visualStudio from '../images/logos/visual_studio.png';
import SkillsIcon from './SkillsIcon';

const SkillsContentHabilitys = () => {
  return (
    <div className='skills__content'>
      <div className='skills__list'>
        <span className='span__content strong'>
          <ConstructorTag tag='h3' />
          Herramientas:
          <ConstructorCloseTag tag='h3' />
        </span>
        <span className='span__content'>
          <ConstructorTag tag='ul' />
        </span>
        <SkillsList name='GitHub' />
        <SkillsList name='Visual Studio Code' />
        <SkillsList name='Npm' />
        <SkillsList name='Trello' />
        <SkillsList name='Slack' />
        <SkillsList name='Figma' />
        <SkillsList name='Zeplin' />
        <span className='span__content'>
          <ConstructorCloseTag tag='ul' />
        </span>
      </div>
      <SkillsLogos>
        <SkillsIcon img={github} altImg='GitHub' />
        <SkillsIcon img={visualStudio} altImg='Visual Studio' />
        <SkillsIcon img={npm} altImg='npm' />
        <SkillsIcon img={trello} altImg='Trello' />
        <SkillsIcon img={slack} altImg='Slack' />
        <SkillsIcon img={figma} altImg='Figma' />
      </SkillsLogos>
    </div>
  );
};

export default SkillsContentHabilitys;
