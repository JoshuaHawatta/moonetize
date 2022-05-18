import { memo, useState, useContext } from 'react';
import BrlCurrencyComponent from '../../currency';
import { LoggedUserContext } from '../../contexts/Logged-user';
import { nameRegex } from './regex.js';
import './login.css';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { setUserIsLogged, userName, setUserName } = useContext(LoggedUserContext);

  const logUser = () => {
    if(nameRegex.test(userName)) {
      sessionStorage.setItem('User', JSON.stringify(userName));
      setUserIsLogged(true);
    }else {
      setErrorMessage('Você precisa de no mínimo 2 caractéres para fazer o login!');
      return
    }
  }

  return(
    <section className='login-section'>
      <h2>Antes de Começar...</h2>
      <div className="field-group">

        <div className='field'>
          <label className='labels' htmlFor='nameInput'>Me fala seu nome!</label>
          <input 
            type='text'
            autoComplete='off'
            placeholder='Exemplo: Zé da silva'
            onChange={ e => setUserName(e.target.value) }
            value={ userName }
            id='nameInput' />
            <span className='errorMessage'>{ errorMessage }</span>
        </div>

        <div className='field'>
          <label className='labels' htmlFor='moneyInput'>Você vai gastar quanto?</label>
            <BrlCurrencyComponent placeholder='R$' id='moneyInput' />
        </div>

        <button className="btn" onClick={ logUser }>Vamos Começar!</button>
      </div>
    </section>
  )
}

export default memo(LoginPage);