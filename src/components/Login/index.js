import { memo, useState, useContext, useCallback } from 'react';
import { nameRegex } from './regex.js';
import { BRL_LOGIN_CURRENCY } from '../../currency';
import { ShowOrHideHeaderContext } from '../../contexts/DisplayHeader';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { LoginSection, InputFieldDiv, Field } from './styles.js';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { setLoggedUser, userName, setUserName, userMoney } = useContext(LoggedUserContext);
  const { setDisplayHeader } = useContext(ShowOrHideHeaderContext);

  const handleLogUser = useCallback(() => {
    if(nameRegex.test(userName)) {
      setLoggedUser(true);
      setDisplayHeader(true);
      sessionStorage.setItem('User', JSON.stringify({ userName, userMoney }));
    }else {
      setErrorMessage('Você precisa de no mínimo 1 caractér para fazer o login!');
      return
    }
  }, [userName, userMoney])

  return(
    <LoginSection>
      <h2>Antes de Começar...</h2>

      <InputFieldDiv>
        <Field>
          <label htmlFor='nameInput'>Me fala seu nome!</label>
          <input 
            type='text'
            autoComplete='off'
            placeholder='Exp: Zé'
            onChange={ e => setUserName(e.target.value) }
            value={ userName } />
            <span className='errorMessage'>{ errorMessage }</span>
        </Field>

        <Field>
          <label htmlFor='moneyInput'>Você vai gastar quanto?</label>
            <BRL_LOGIN_CURRENCY placeholder='R$' />
        </Field>
        
        <button onClick={ handleLogUser }>Vamos Começar!</button>
      </InputFieldDiv>

    </LoginSection>
  )
}

export default memo(LoginPage);