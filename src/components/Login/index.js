import { memo, useContext, useCallback } from 'react';
import { nameRegex } from './regex.js';
import { BRL_LOGIN_CURRENCY } from '../../currency';
import { LoggedUserContext } from '../../contexts/LoggedUser';
import { ErrorMessagesContext } from '../../contexts/ErrorMessage';
import { LoginSection, InputFieldDiv, Field } from './styles.js';

const LoginPage = () => {
  const { setLoggedUser, userName, setUserName, userMoney } = useContext(LoggedUserContext);
  const { errorMessage, setErrorMessage } = useContext(ErrorMessagesContext);

  const handleLogUser = useCallback(() => {
    if(nameRegex.test(userName)) {
      setLoggedUser(true);
      setErrorMessage('');
      sessionStorage.setItem('User', JSON.stringify({ userName, userMoney }));
    }else {
      setErrorMessage('Você precisa de no mínimo 1 caractér para fazer o login!');
      return
    }
  }, [userName, userMoney, setErrorMessage, setLoggedUser])

  return(
    <LoginSection>
      <h2>Antes de Começar...</h2>

      <InputFieldDiv>
        <Field>
          <label htmlFor='name-input'>Me fala seu nome!</label>
          <input 
            type='text'
            id='name-input'
            autoComplete='off'
            placeholder='Exp: Zé'
            onChange={ e => setUserName(e.target.value) }
            value={ userName } />
            <span>{ errorMessage }</span>
        </Field>

        <Field>
          <label htmlFor='money-input'>Você vai gastar quanto?</label>
            <BRL_LOGIN_CURRENCY placeholder='R$' />
        </Field>
        
        <button onClick={ handleLogUser }>Vamos Começar!</button>
      </InputFieldDiv>

    </LoginSection>
  )
}

export default memo(LoginPage);