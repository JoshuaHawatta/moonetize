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
    
    console.log(value); // value without mask (ex: 1234.56)
    console.log(maskedValue); // masked value (ex: R$1234,56)
  };
  
  return(
    <IntlCurrencyInput 
      currency="BRL" 
      config={currencyConfig}
      name='totalMoney'
      onChange={handleChange} 
      value={ props.setValue } />
  );
}

export default BrlCurrencyComponent;

//LINK DOCUMENTAÇÃO LIB:https://github.com/thiagozanetti/react-intl-currency-input