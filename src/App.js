import React, { Component } from 'react';

import styles from './cssfile.css';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import MainContent from './components/maincontent';
import Navbar from './components/navbar';
//
//import './Assets/CSS/defaincludesult.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <MainContent />
      <Navbar />
      <Footer />
      </div>
    );
  }
}

export default App;
