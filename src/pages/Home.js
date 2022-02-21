import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSectionTerminer from '../components/ProjectsSectionTerminer';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSectionAvant from '../components/ProjectsSectionAvant';
import ProjectsSectionEncours from '../components/ProjectsSectionEncours';
import './Home.scss';
import HauDePage from '../components/HauDePage';

export default function Home() {
  return (
    <div>
      <HauDePage />
      <AboutSection />
      <ServicesSection />
      <ProjectsSectionAvant />
      <ProjectsSectionEncours />
      <ProjectsSectionTerminer />
      <ContactBanner />
    </div>
  );
}
