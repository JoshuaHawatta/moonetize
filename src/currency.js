import { useContext } from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import { LoggedUserContext } from './contexts/Logged-user';

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

const BrlCurrencyComponent = () => {
  const { setUserMoney } = useContext(LoggedUserContext);

  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    setUserMoney([value, maskedValue])
  };

  return(
    <IntlCurrencyInput currency="BRL" config={ currencyConfig } onChange={ handleChange } />
  );
}

export default BrlCurrencyComponent;