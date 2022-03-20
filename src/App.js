import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PAGES_URLS from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import './initial.css';

const App = () => {
  return(
    <Router>
      <Header />
      <main className="App">
        <PAGES_URLS />
      </main>
      <Footer />
    </Router>
  )
}

export default App;