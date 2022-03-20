import IntlCurrencyInput from 'react-intl-currency-input';

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

  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    localStorage.setItem('user-money', JSON.stringify([value, maskedValue]))
  };

  return(
    <IntlCurrencyInput currency="BRL" config={ currencyConfig } onChange={ handleChange } />
  );
}

export default BrlCurrencyComponent;