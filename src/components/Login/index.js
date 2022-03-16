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

  if(!logged && localStorage.length === 0) {
    return(
      <section id='loginSection'>
        <div className='inputDiv'>
          <label className='labels' htmlFor='nameInput'>Nome:</label>
          <input 
            type='text' 
            placeholder='Exp: zé da silva' 
            name='user' 
            onChange={ handleInputState } 
            value={ userState.name } 
            id='nameInput' />
        </div>

        <div className='inputDiv'>
          <label className='labels' htmlFor='moneyInput'>Quanto quer gastar:</label>
          <input 
            type='text' 
            placeholder='R$' 
            name='totalMoney' 
            onChange={ handleInputState } 
            value={ userState.totalMoney } 
            id='moneyInput' />
        </div>


        {/*
          KUGIH, ESSE CÓDIGO ABAIXO É A LIB QUE ACHEI COMO ALTERNATIVA. NÃO CONSIGO ARMAZENAR O VALOR DELA PARA USAR DEPOIS... JÁ TENTEI DE TUDO. TERIA COMO ENSINAR, PFV? ESTÁ COMENTADO POR MOTIVOS ÓBVIOS KKKKK.
          */}

        {/* <div>
          <BrlCurrencyComponent setValue={ userState.totalMoney }/>
        </div> */}

        <button onClick={ handleCreateUser } id='loginBtn'>Começar</button>
      </section>
    )
  }
  return( <HubJSX /> )
}

export default SignOrLogin;