import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//COMPONENTS_AND_ROUTES
import PAGES_URLS from './routes';
import Footer from './components/Footer';
import Header from './components/Header';

//PROVIDERS 
import LoggedUserProvider from './contexts/LoggedUser';
import ShowMoneyAmmountProvider from './contexts/ShowMoney';

import './setup.css';

const App = () => {

  return(
    <LoggedUserProvider>    
      <ShowMoneyAmmountProvider>
        <Router>
          <Header />
          <PAGES_URLS />
          <Footer />
        </Router>
      </ShowMoneyAmmountProvider>
    </LoggedUserProvider>  
  )
}

export default App