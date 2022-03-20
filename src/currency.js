import IntlCurrencyInput from "react-intl-currency-input";
import { useState } from "react";

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

const BrlCurrencyComponent = props => {
  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    let name = event.target.getAttribute('name')
    localStorage.setItem(name, `${value};${maskedValue}`)
  };

  return(
    <IntlCurrencyInput 
      currency="BRL" 
      config={currencyConfig}
      name='totalMoney'
      onChange={handleChange}
      value={props.setValue} />
  );
}

export default BrlCurrencyComponent;

//LINK DOCUMENTAÇÃO LIB:https://github.com/thiagozanetti/react-intl-currency-input