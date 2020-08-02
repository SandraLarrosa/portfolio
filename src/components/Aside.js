import React from 'react';
import mail from '../images/mail.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import '../stylesheets/aside.scss';

const Aside = (props) => {
  return (
    <div>
      <nav className='aside__nav'>
        <ul>
          <li>
            <a href='mailto: sandra.larrosa88@gmail.com' target='_blank'>
              <img className='iconRRSS' src={mail} alt='icon__email'></img>
            </a>
          </li>
          <li>
            <a href='https://github.com/SandraLarrosa' target='_blank'>
              <img className='iconRRSS' src={github} alt='icon__github'></img>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/alexandralopezlarrosa/'
              target='_blank'
            >
              <img
                className='iconRRSS'
                src={linkedin}
                alt='icon__linkedin'
              ></img>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/AlexandraLopez' target='_blank'>
              <img className='iconRRSS' src={twitter} alt='icon__twitter'></img>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
