import React from 'react';
import Title from '../tags/Title';
import { Carousel } from 'react-responsive-carousel';
//Styles
import '../../stylesheets/projects.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//Images
import appBirthday from '../../images/imagesProjects/AppBirthday.png';
import cotizadorPrestamos from '../../images/imagesProjects/cotizadorPrestamos.png';
import bikerGirlsSpain from '../../images/imagesProjects/bikerGirlsSpain.png';
import portfolio from '../../images/imagesProjects/portfolio.png';
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
              image={appBirthday}
              title='APP BIRTHDAY'
              text='Aplicación Movil para registrar cumpleaños'
              tools='REACT NATIVE || JAVASCRIPT || FIREBASE'
              github='https://github.com/SandraLarrosa/App-Birthays'
              web='https://github.com/SandraLarrosa/App-Birthays'
            />
            <ProjectsLegend
              image={cotizadorPrestamos}
              title='App COTIZADOR DE PRÉSTAMOS'
              text='Aplicación movil que calcular el dinero a pagar en un préstamo'
              tools='REACT NATIVE || JAVASCRIPT'
              github='https://github.com/SandraLarrosa/Cotizador-de-Prestamos'
              web='https://github.com/SandraLarrosa/Cotizador-de-Prestamos'
            />
            <ProjectsLegend
              image={bikerGirlsSpain}
              title='BIKER GIRLS SPAIN'
              text='Web del grupo motero de mujeres Biker Girl Spain (En construcción)'
              tools='REACT || JAVASCRIPT || SCSS'
              github='https://github.com/SandraLarrosa/Biker-Girls-Spain'
              web='http://www.bikergirlspain.com/'
            />
            <ProjectsLegend
              image={portfolio}
              title='MI PORTFOLIO'
              text='Mi propia web como desarrolladora Fron End'
              tools='REACT || JAVASCRIPT || SCSS'
              github='https://github.com/SandraLarrosa/portfolio'
              web='http://www.alexandradev.es'
            />
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
