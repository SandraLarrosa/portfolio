import React from 'react';
//Styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../stylesheets/projectsLegend.scss';
//Images
import gitIcon from '../images/imagesProjects/github.png';
import webIcon from '../images/imagesProjects/website.png';

const ProjectsLegend = ({ image, title, text, tools, github, web }) => {
  return (
    <div>
      <img src={image} alt={title}></img>
      <div className='legend'>
        <h4 className='legend__title'>{title}</h4>
        <p className='legend__text'>{text}</p>
        <p className='legend__tools'>{tools}</p>
        <ul className='content__icon'>
          <li>
            <div className='content__icon--image'>
              <a href={github} target='_blank' rel="noopener noreferrer">
                <img src={gitIcon} alt={title}></img>
              </a>
            </div>
          </li>
          <li>
            <div className='content__icon--image'>
              <a href={web} target='_blank' rel="noopener noreferrer">
                <img src={webIcon} alt={title}></img>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsLegend;
