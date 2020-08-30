import React from 'react';
import Title from './Title';
import '../stylesheets/skills.scss';
import SkillsContentTecnologies from './SkillsContentTecnologies';
import SkillsContentHabilitys from './SkillsContentHabilitys';

const skills = () => {
  return (
    <section className='skills'>
      <Title name='Skills' />
      <div className='skillsList'>
        <SkillsContentTecnologies />
        <SkillsContentHabilitys />
      </div>
    </section>
  );
};

export default skills;
