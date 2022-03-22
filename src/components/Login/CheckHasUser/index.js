import { memo, useState } from 'react';
import BrlCurrencyComponent from '../../../currency';
import MoonetizeJSX from '../../../pages/MoonetizeHub';
import './login.css';

const CheckifHasUser = () => {
  const [userName, setUserName] = useState('');
  const [logged, setLogged] = useState(false);

  const handleCreateUser = () => {
    localStorage.setItem('user-name', JSON.stringify(userName));
    setLogged(true);
  }

  if(!logged) {
    return(
      <section className="cover">
        <h2 className="headline-2 text-primary-color">Antes de Começar...</h2>
        
        <div className="field-group">
          <div className='field'>
            <label className='labels' htmlFor='nameInput'>Diga seu nome</label>
            <input 
              type='text' 
              placeholder='Ex.: Jóse Carlos...' 
              name='user' 
              onChange={ e => setUserName(e.target.value) } 
              value={ userName } 
              id='nameInput' />
          </div>
          <div className='field'>
            <label className='labels' htmlFor='moneyInput'>Quanto quer gastar?</label>
              <BrlCurrencyComponent placeholder='R$' id='moneyInput' />
          </div>

          <button className="btn" onClick={ handleCreateUser }>Vamos, Começar!</button>
        </div>
      </section>
    )
  }else { return(<MoonetizeJSX />) }
}

export default memo(CheckifHasUser);