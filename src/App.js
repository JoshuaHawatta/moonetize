import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PAGES_URLS from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import LoggedUserProvider from './contexts/Logged-user';
import './setup.css';

const App = () => {
  return(
    <LoggedUserProvider>
      <Router>
        <Header />
        <main className="App">    
          <PAGES_URLS />
        </main>
        <Footer />
      </Router>
    </LoggedUserProvider>
  )
}

export default App