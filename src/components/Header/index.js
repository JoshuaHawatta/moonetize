import { useContext } from 'react';
import { LoggedUserContext } from '../../contexts/LoggedUser';
import { Link } from 'react-router-dom';

import { HeaderWrapper, LogoDiv, NavBarLinks } from './styles';

const Header = () => {
  const { loggedUser } = useContext(LoggedUserContext);

  if(!loggedUser && sessionStorage.length === 0) {
    return (
      null
    )
  }else {
    return(
      <HeaderWrapper>
        <LogoDiv>
          <img src={ require('../../assets/images/logo-with-background.png') } alt='logo' />
          <Link to='/'>Moonetize</Link>
        </LogoDiv>
        
        <NavBarLinks>
          <Link to='/'>Home</Link>
          <Link to='/pass-the-hat'>Vaquinha</Link>
          <Link to='/cart'>Carrinho</Link>
          <Link to='/about'>Quem somos</Link>
        </NavBarLinks>
      </HeaderWrapper> 
    )
  }
}

export default Header