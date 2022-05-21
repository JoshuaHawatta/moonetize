import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './setup.css';

//COMPONENTS_AND_ROUTES
import PAGES_URLS from './routes';
import Footer from './components/Footer';
import Header from './components/Header';

//PROVIDERS 
import LoggedUserProvider from './contexts/Logged-user';
import ShowMoneyAmmountProvider from './contexts/ShowMoney';
import ShowOrHideHeaderProvider from './contexts/DisplayHeader';

const App = () => {
  return(
    <LoggedUserProvider>
      <ShowOrHideHeaderProvider>
        <ShowMoneyAmmountProvider>
          <Router>
            <Header />
            <PAGES_URLS />
            <Footer />
          </Router>
        </ShowMoneyAmmountProvider>
      </ShowOrHideHeaderProvider>
    </LoggedUserProvider>  
  )
}

export default App