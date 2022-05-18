import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { ShowMoneyAmmountContext } from '../../contexts/ShowMoney';
import LoginPage from '../../components/Login';
import { FaMoneyCheckAlt, FaShoppingCart, FaEye, FaEyeSlash } from 'react-icons/fa';

import {
  MainWrapper, 
  UserHubSection, 
  UserDataDiv, 
  HideOrShowMoneyDiv, 
  FunctionalitiesSection,
  FunctionalityDiv
} from './styles.js';


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
      <MainWrapper>
        <UserHubSection>
          <UserDataDiv>
            <h1>Olá, { userNameData }!</h1>
            <p>{ showMoneyAmmount ? userMoney[1] : '****' }</p>
          </UserDataDiv>
  
          <HideOrShowMoneyDiv>
            { showMoneyAmmount 
              ? <FaEye onClick={ () => setShowMoneyAmmount(false) } /> 
              : <FaEyeSlash onClick={ () => setShowMoneyAmmount(true) } /> 
            }
          </HideOrShowMoneyDiv>
        </UserHubSection>

        <FunctionalitiesSection>
          <Link to='/pass-the-hat'>
            <FunctionalityDiv>
              <FaMoneyCheckAlt />
              <h2>Vaquinha</h2>
              <span>Calcular minha parte dos gastos.</span>
            </FunctionalityDiv>
          </Link>

          <Link to='/cart'>
            <FunctionalityDiv>
              <FaShoppingCart />
              <h2>Carrinho</h2>
              <span>Ver quanto já gastei.</span>
            </FunctionalityDiv>
          </Link>

        </FunctionalitiesSection>
      </MainWrapper>
    )
  }
}

export default memo(HomeJSX);