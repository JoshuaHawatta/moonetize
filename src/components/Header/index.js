import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return(
    <header id='headerBar'>
      <section id='logoSection'>
        <img src={ require('../../assets/images/logo-with-background.png') } alt='Mooty-logo' id='mootyLogo' />
        <h1 id='logoName'>Mooty</h1>
      </section>
      <nav id='navBar'>
        <Link to='/'>Minha conta</Link>
        <Link to='/pass-the-hat'>Vaquinha</Link>
        <Link to='/market'>Mercado</Link>
        <Link to='/about'>Sobre</Link>
      </nav>
    </header> 
  )
}

export default Header;