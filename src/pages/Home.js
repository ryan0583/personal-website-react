import React from 'react';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ModalsContainer from '../components/Modal/ModalsContainer';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
  return (
    <div id="home" className="App">
      <Header />
      <NavBar />
      <Content />
      <div className="footer-spacer" />
      <Footer />
      <ModalsContainer />
    </div>
  );
};

export default Home;
