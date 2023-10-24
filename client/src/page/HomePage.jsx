import React from 'react';
import Footer from '../components/Footer';
import SnackSection from '../components/SnackSection';
import AboutSection from '../components/AboutSection';
import Section from '../components/Section';
import Sidebar from '../components/Sidebar';
import Header from './../components/Header';


const HomePage = ({authLogic}) => {
  
  return (
    <>
    <Header/>
    <Sidebar/>
    <Section/>
    <SnackSection/>
    <AboutSection/>
    <Footer/> 
    </>
  );
};

export default HomePage;
