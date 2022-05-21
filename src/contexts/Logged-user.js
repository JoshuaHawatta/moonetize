import { createContext, useState } from 'react';

export const LoggedUserContext = createContext({});

const LoggedUserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMoney, setUserMoney] = useState([]);

  return(
    <LoggedUserContext.Provider value={ { 
      loggedUser, 
      setLoggedUser, 
      userName, 
      setUserName, 
      userMoney, 
      setUserMoney } }>
      { children }
    </LoggedUserContext.Provider>
  )
}

export default LoggedUserProvider