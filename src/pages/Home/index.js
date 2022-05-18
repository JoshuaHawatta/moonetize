import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { ShowMoneyAmmountContext } from '../../contexts/ShowMoney';
import LoginPage from '../../components/Login';
import { FaMoneyCheckAlt, FaShoppingCart, FaEye, FaEyeSlash } from 'react-icons/fa';
import './home.css';

const HomeJSX = () => {
  const userNameData = JSON.parse(sessionStorage.getItem('User'));
  const { userIsLogged, userMoney } = useContext(LoggedUserContext);
  const { showMoneyAmmount, setShowMoneyAmmount } = useContext(ShowMoneyAmmountContext);

  if(!userIsLogged && sessionStorage.length === 0) {
    return(
      <LoginPage /> 
    )
  }else {
    return (
      <main>
        <div className='user-hub-div'>
          <div className='user-data'>
            <h1>Olá, { userNameData }!</h1>
            <p>{ showMoneyAmmount ? userMoney[1] : '****' }</p>
          </div>
  
          <div className='hide-or-show-money-icon'>
            { showMoneyAmmount 
              ? <FaEye className='eye-icon open' onClick={ () => setShowMoneyAmmount(false) } /> 
              : <FaEyeSlash className='eye-icon shut' onClick={ () => setShowMoneyAmmount(true) } /> 
            }
          </div>
        </div>

        <div className='functionalities'>
          <div className='functionality'>
            <Link to='/pass-the-hat'>
              <FaMoneyCheckAlt />
              <h2>Vaquinha</h2>
              <span>Ver quanto preciso dar da minha parte.</span>
            </Link>
          </div>
  
          <div className='functionality'>
            <Link to='cart'>
              <FaShoppingCart />
              <h2>Carrinho</h2>
              <span>Ver quanto preciso já gastei.</span>
            </Link>
          </div>

        </div>
      </main>
    )
  }
}

export default memo(HomeJSX);