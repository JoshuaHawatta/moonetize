import { memo, useContext } from 'react';
import BrlCurrencyComponent from '../../currency';
import { LoggedUserContext } from '../../contexts/Logged-user';
import './login.css';

const LoginPage = () => {
  const { setUserIsLogged, userName, setUserName, userMoney } = useContext(LoggedUserContext);

  const logUser = () => {
    localStorage.setItem('User', JSON.stringify({ userName, userMoney} ));
    setUserIsLogged(true);
  }

  return(
    <section className="cover">
      <h2 className="headline-2 text-primary-color">Antes de Começar...</h2>
      
      <div className="field-group">
        <div className='field'>
          <label className='labels' htmlFor='nameInput'>Me fala seu nome!</label>
          <input 
            type='text' 
            placeholder='Exemplo: Zé da silva'  
            onChange={ e => setUserName(e.target.value) } 
            value={ userName } 
            id='nameInput' />
        </div>

        <div className='field'>
          <label className='labels' htmlFor='moneyInput'>Você vai gastar quanto?</label>
            <BrlCurrencyComponent placeholder='R$' id='moneyInput' />
        </div>

        <button className="btn" onClick={ logUser }>Vamos, Começar!</button>
      </div>
    </section>
  )
}

export default memo(LoginPage);