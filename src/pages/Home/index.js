import { useContext } from 'react';
import { LoggedUserContext } from '../../contexts/Logged-user';
import LoginPage from '../../components/Login';

const HomeJSX = () => {
  const { userIsLogged } = useContext(LoggedUserContext);

  if(!userIsLogged && localStorage.length === 0) {
    return(
      <LoginPage /> 
    )
  }

  return (
    <h1>Você me logou!</h1>
  )
}

export default HomeJSX;