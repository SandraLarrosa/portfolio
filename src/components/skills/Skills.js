import React from 'react';
import Title from '../tags/Title';
import SkillsContentTecnologies from './SkillsContentTecnologies';
import SkillsContentHabilitys from './SkillsContentHabilitys';
//Styles
import '../../stylesheets/skills.scss';


const skills = () => {
  return (
    <>
      <section className='skills'>
        <Title name='Skills' />
        <div className='skillsList'>
          <SkillsContentTecnologies />
          <SkillsContentHabilitys />
        </div>
      </section>
    </>
  );
};

export default skills;
