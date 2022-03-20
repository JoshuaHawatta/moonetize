import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return(
    <header className="navbar">
      <div className="nav-brand">
        <img src={ require('../../assets/images/logo-with-background.png') } alt='Mooty logo' />
        <h1 className="nav-title">Moonetize</h1>
      </div>
      <nav className='nav-links'>
        <Link to='/'>Minha conta</Link>
        <Link to='/pass-the-hat'>Vaquinha</Link>
        <Link to='/cart'>Carrinho</Link>
        <Link to='/about'>Sobre</Link>
      </nav>
    </header> 
  )
}

export default Header;