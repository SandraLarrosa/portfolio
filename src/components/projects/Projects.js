import React from 'react';
import Title from '../tags/Title';
import { Carousel } from 'react-responsive-carousel';
//Styles
import '../../stylesheets/projects.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//Images
import rickandmorty from '../../images/imagesProjects/rickandmorty1.png';
import favoritesShows from '../../images/imagesProjects/favoritesShows1.jpg';
import griffindcode from '../../images/imagesProjects/griffindcode.png';
import theATeam from '../../images/imagesProjects/theATeam.jpg';
import simpsonsquote from '../../images/imagesProjects/simpsonsquote.png';
import villanasReactcionarias from '../../images/imagesProjects/villanas-reactcionarias.png';
import emotionsGifs from '../../images/imagesProjects/emotions-gifs.png';
import ProjectsLegend from './ProjectsLegend';

const Projects = () => {
  return (
    <>
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
            <ProjectsLegend
              image={rickandmorty}
              title='PICKLE RICK FINDER'
              text='Buscador de personajes de la serie de Rick y Morty'
              tools='REACT || JAVASCRIPT || SCSS'
              github='https://github.com/SandraLarrosa/Pickle-Rick-Finder'
              web='https://sandralarrosa.github.io/Pickle-Rick-Finder'
            />
            <ProjectsLegend
              image={favoritesShows}
              title='FAVORITES SHOWS'
              text='Buscador de series con un apartado para poder añadir tus series favoritas'
              tools='JAVASCRIPT || SCSS || HTML5'
              github='https://github.com/SandraLarrosa/Favorites-Shows'
              web='https://sandralarrosa.github.io/Favorites-Shows'
            />
            <ProjectsLegend
              image={griffindcode}
              title='GRIFFINDCODE'
              text='Generador de tarjetas profesionales dinámicas'
              tools='JAVASCRIPT || SCSS || HTML5'
              github='https://github.com/SandraLarrosa/Codegriffin'
              web='https://sandralarrosa.github.io/Codegriffin'
            />
            <ProjectsLegend
              image={theATeam}
              title='THE A TEAM'
              text='Web grupal en la que nos presentamos como grupo, con información personal de cada componente del equipo y un formulario de contacto.'
              tools='HTML5 || SCSS'
              github='https://github.com/SandraLarrosa/The-A-Team'
              web='https://sandralarrosa.github.io/The-A-Team'
            />
            <ProjectsLegend
              image={simpsonsquote}
              title='SIMPSONS QUOTE'
              text='Aplicación que genera citas aleatorias de los simpsons'
              tools='REACT || JAVASCRIPT || SCSS'
              github='https://github.com/SandraLarrosa/Simpsons-Quote'
              web='https://sandralarrosa.github.io/Simpsons-Quote'
            />
            <ProjectsLegend
              image={villanasReactcionarias}
              title='LAS VILLANAS REACTCIONARIAS'
              text='Generador de tarjetas profesionales con React'
              tools='REACT || JAVASCRIPT|| SCSS'
              github='https://github.com/SandraLarrosa/Las-Villanas-Reactcionarias'
              web='https://sandralarrosa.github.io/Las-Villanas-Reactcionarias'
            />
            <ProjectsLegend
              image={emotionsGifs}
              title='EMOTIONS GIFS'
              text='Generador de gifs según el estado de ánimo'
              tools='REACT || JAVASCRIPT || SCSS'
              github='https://github.com/SandraLarrosa/Emotions-Gifs'
              web='https://sandralarrosa.github.io/Emotions-Gifs'
            />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Projects;
