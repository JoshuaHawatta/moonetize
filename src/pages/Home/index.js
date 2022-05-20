import { useContext, useCallback, memo } from 'react';
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
  const userData = JSON.parse(sessionStorage.getItem('User')) || [];
  const { userName, userMoney } = userData;

  const { userIsLogged } = useContext(LoggedUserContext);
  const { showMoneyAmmount, setShowMoneyAmmount } = useContext(ShowMoneyAmmountContext);

  const changeMoneyVisibility = useCallback(() => {
    showMoneyAmmount ? setShowMoneyAmmount(false) : setShowMoneyAmmount(true);
  }, [showMoneyAmmount])

  if(!userIsLogged && sessionStorage.length === 0) {
    return(
      <LoginPage /> 
    )
  }else {
    return (
      <MainWrapper>
        <UserHubSection>
          <UserDataDiv>
            <h1>Olá, { userName }!</h1>
            <p>{ showMoneyAmmount ? userMoney[1] : '****' }</p>
          </UserDataDiv>
  
          <HideOrShowMoneyDiv>
            { showMoneyAmmount 
              ? <FaEye onClick={ changeMoneyVisibility } /> 
              : <FaEyeSlash onClick={ changeMoneyVisibility } /> 
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
              <span>Fazer minha lista de compras.</span>
            </FunctionalityDiv>
          </Link>

        </FunctionalitiesSection>
      </MainWrapper>
    )
  }
}

export default memo(HomeJSX);