import { memo, useState, useContext } from 'react';
import BrlCurrencyComponent from '../../currency';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { nameRegex } from './regex.js';
import { LoginSection, InputFieldDiv, Field } from './styles.js';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { setUserIsLogged, userName, setUserName, userMoney } = useContext(LoggedUserContext);

  const logUser = () => {
    if(nameRegex.test(userName)) {
      setUserIsLogged(true);
      sessionStorage.setItem('User', JSON.stringify({ userName, userMoney }));
    }else {
      setErrorMessage('Você precisa de no mínimo 1 caractér para fazer o login!');
      return
    }
  }

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
            <BrlCurrencyComponent placeholder='R$' />
        </Field>
        
        <button onClick={ logUser }>Vamos Começar!</button>
      </InputFieldDiv>

    </LoginSection>
  )
}

export default memo(LoginPage);