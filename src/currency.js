import { useContext } from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import { LoggedUserContext } from './contexts/LoggedUser';
import { CartPriceContext } from './contexts/CartPrice';

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

export const CART_MASKED_PRICE_INPUT = ({ name, id }) => {
  const { cartPrice, setCartPrice } = useContext(CartPriceContext);

  const handleChange = (event, value, maskedValue) =>setCartPrice(value);

  return(
    <IntlCurrencyInput 
      currency="BRL" 
      name={ name }
      id={ id }
      config={ currencyConfig } 
      onChange={ handleChange }
      value={ cartPrice } />
  )
}

export const showMoneyAsCurrency = number => {
  const BRL_FORMAT = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return BRL_FORMAT.format(number)
}