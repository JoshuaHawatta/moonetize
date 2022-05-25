import { useContext } from 'react';
import { LoggedUserContext } from '../../contexts/LoggedUser';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const { loggedUser } = useContext(LoggedUserContext);

  if(!loggedUser && sessionStorage.length === 0) {
    return (
      <>
      </>
    )
  }else {
    return(
      <header>
        <div className='logo-div'>
          <img src={ require('../../assets/images/logo-with-background.png') } alt='Moonetize-logo' />
          <Link to='/'>Moonetize</Link>
        </div>
        
        <nav className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pass-the-hat'>Vaquinha</Link>
          <Link to='/cart'>Carrinho</Link>
          <Link to='/about'>Quem somos</Link>
        </nav>
      </header> 
    )
  }
}

export default Header