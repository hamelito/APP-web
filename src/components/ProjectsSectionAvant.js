import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Typewriter from 'typewriter-effect';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';
import PText from './PText';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 2rem 0;
  transform: translateY(-150px);
  .hero__name {
    font-family: 'Montserrat SemiBold';
    font-size: 2rem;
    color: var(--white);
    height: 0px;
    transform: translateY(-20px);
  }
  .p {
    span {
      display: inline-block;
      width: 100%;
    }
  }

  .projects__allItems {
    display: flex;
    padding: 2rem 0;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev {
    position: distnct;
    height: 50px;
    width: 30px;
    background: var(--deep-dark);
    z-index: 10;
    right: auto;
    left: 10px;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    position: distnct;
    height: 50px;
    width: 30px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectsSectionAvant() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <div className="hero__name">
          <Typewriter
            options={{
              strings: ['La dernière realisation de GUF BTP ...'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <SectionTitle
          subheading="Les dernières réalisations ..."
          heading="project"
        />
        <PText>
          <p>
            {' '}
            Ci-dessous un de nos projet en phase <span>
              {' '}
              avant rénovation
            </span>,{' '}
          </p>
        </PText>
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
