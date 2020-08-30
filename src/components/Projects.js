import React from 'react';
import Title from './Title';
import '../stylesheets/projects.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import rickandmorty from '../images/imagesProjects/rickandmorty1.png';
import favoritesShows from '../images/imagesProjects/favoritesShows1.jpg';
import griffindcode from '../images/imagesProjects/griffindcode.png';
import theATeam from '../images/imagesProjects/theATeam.jpg';
import simpsonsquote from '../images/imagesProjects/simpsonsquote.png';
import villanasReactcionarias from '../images/imagesProjects/villanas-reactcionarias.png';
import emotionsGifs from '../images/imagesProjects/emotions-gifs.png';
import ProjectsLegend from './ProjectsLegend';

const Projects = () => {
  return (
    <section className='projects'>
      <Title name='Proyectos' />
      <div className='carousel'>
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={2500}
          infiniteLoop={true}
        >
          <div>
            <img src={rickandmorty}></img>
            <ProjectsLegend
              title='PICKLE RICK FINDER'
              text='Buscador de personajes de la serie de Rick y Morty'
              tools='React || JavaScript || SCSS'
              github='https://github.com/SandraLarrosa/Pickle-Rick-Finder'
              web='https://sandralarrosa.github.io/Pickle-Rick-Finder'
            />
          </div>
          <div>
            <img src={favoritesShows}></img>
            <ProjectsLegend
              title='FAVORITES SHOWS'
              text='Buscador de series y gestión de favoritos'
              tools='JavaScript || SCSS || HTML5'
              github='https://github.com/SandraLarrosa/Favorites-Shows'
              web='https://sandralarrosa.github.io/Favorites-Shows'
            />
          </div>
          <div>
            <img src={griffindcode}></img>
            <ProjectsLegend
              title='GRIFFINDCODE'
              text='Generador de tarjetas profesionales'
              tools='JavaScript || SCSS || HTML5'
              github='https://github.com/SandraLarrosa/Codegriffin'
              web='https://sandralarrosa.github.io/Codegriffin'
            />
          </div>
          <div>
            <img src={theATeam}></img>
            <ProjectsLegend
              title='THE A TEAM'
              text='Página estática de presentación del equipo'
              tools='HTML5 || SCSS'
              github='https://github.com/SandraLarrosa/The-A-Team'
              web='https://sandralarrosa.github.io/The-A-Team'
            />
          </div>
          <div>
            <img src={simpsonsquote}></img>
            <ProjectsLegend
              title='SIMPSONS QUOTE'
              text='Aplicación que genera citas aleatorias de los simpsons'
              tools='React || JavaScript || SCSS'
              github='https://github.com/SandraLarrosa/Simpsons-Quote'
              web='https://sandralarrosa.github.io/Simpsons-Quote'
            />
          </div>
          <div>
            <img src={villanasReactcionarias}></img>
            <ProjectsLegend
              title='LAS VILLANAS REACTCIONARIAS'
              text='Generador de tarjetas profesionales con React'
              tools='React || JavaScript || SCSS'
              github='https://github.com/SandraLarrosa/Las-Villanas-Reactcionarias'
              web='https://sandralarrosa.github.io/Las-Villanas-Reactcionarias'
            />
          </div>
          <div>
            <img src={emotionsGifs}></img>
            <ProjectsLegend
              title='EMOTIONS GIFS'
              text='Generador de gifs según el estado de ánimo'
              tools='React || JavaScript || SCSS'
              github='https://github.com/SandraLarrosa/Emotions-Gifs'
              web='https://sandralarrosa.github.io/Emotions-Gifs'
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
