import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return(
    <header class="navbar">
      <div class="nav-brand">
        <img src={ require('../../assets/images/logo-with-background.png') } alt='Mooty logo' />
        <h1 class="nav-title">Mooty</h1>
      </div>
      <nav class='nav-links'>
        <Link to='/'>Minha conta</Link>
        <Link to='/pass-the-hat'>Vaquinha</Link>
        <Link to='/market'>Mercado</Link>
        <Link to='/about'>Sobre</Link>
      </nav>
    </header> 
  )
}

export default Header;