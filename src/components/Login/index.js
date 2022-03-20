import { useState } from 'react';
import HubJSX from '../../pages/MootyHub';
import BrlCurrencyComponent from '../../currency'; //CÓDIGO LIB.
import './login.css';

const SignOrLogin = () => {
  const [userState, setUserState] = useState({ user:'', totalMoney: '' });
  const [logged, setLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState([]);

  const handleInputState = e => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value }); //CHANGE_ESPECIFIC_INPUT_VALUE.
  }


  const handleCreateUser = () => {
    loggedUser.push({
      id: Date.now(),
      name: userState.user,
      money: userState.totalMoney //THE_"+"_CONVERT_STRING_TO_NUMBER
    })
    
    const newUser = localStorage.setItem('User', JSON.stringify(loggedUser)) || [];
    setLoggedUser(newUser);
    setLogged(true);
  }

  if(logged && localStorage.length !== 0) {
    return(
      <section class="cover">
        <h2 class="headline-2 text-primary-color">Antes de Começar...</h2>
        
        <div class="field-group">
          <div className='field'>
            <label className='labels' htmlFor='nameInput'>Diga seu nome</label>
            <input 
              type='text' 
              placeholder='Ex.: Jóse Carlos...' 
              name='user' 
              onChange={ handleInputState } 
              value={ userState.user } 
              id='nameInput' />
          </div>
          <div className='field'>
            <label className='labels' htmlFor='moneyInput'>Quanto quer gastar?</label>
              <BrlCurrencyComponent 
                type='text' 
                placeholder='R$' 
                name='totalMoney' 
                onChange={ handleInputState } 
                value={ userState.totalMoney } 
                id='moneyInput' />
          </div>

          <button class="btn" onClick={ handleCreateUser }>Vamos, Começar!</button>
        </div>
        
      </section>
    )
  }
  return( <HubJSX /> )
}

export default SignOrLogin;