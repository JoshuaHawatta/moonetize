import { createContext, useState } from 'react';

export const LoggedUserContext = createContext({});

const LoggedUserProvider = ({ children }) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMoney, setUserMoney] = useState([]);

  return(
    <LoggedUserContext.Provider value={ { 
      userIsLogged, 
      setUserIsLogged, 
      userName, 
      setUserName, 
      userMoney, 
      setUserMoney } }>
      { children }
    </LoggedUserContext.Provider>
  )
}

export default LoggedUserProvider