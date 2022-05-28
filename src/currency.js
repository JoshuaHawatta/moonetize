import { useContext } from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import { LoggedUserContext } from './contexts/LoggedUser';

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

export const BRL_LOGIN_CURRENCY = () => {
  const { setUserMoney } = useContext(LoggedUserContext);

  const handleChange = (event, value, _) => {
    event.preventDefault();
    setUserMoney(value)
  };

  return(
    <IntlCurrencyInput 
      currency="BRL" 
      name='login-currency'
      id='money-input'
      config={ currencyConfig } 
      onChange={ handleChange } />
  )
}

export const numberConverter = string => parseFloat(string.replace(',', '.'));

export const showMoneyAsCurrency = number => {
  const BRL_FORMAT = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return BRL_FORMAT.format(number)
}