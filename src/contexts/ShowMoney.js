import { createContext, useState } from 'react';

export const ShowMoneyAmmountContext = createContext({});

const ShowMoneyAmmountProvider = ({ children }) => {
  const [showMoneyAmmount, setShowMoneyAmmount] = useState(true);

  return(
    <ShowMoneyAmmountContext.Provider value={{ showMoneyAmmount, setShowMoneyAmmount }}>
      { children }
    </ShowMoneyAmmountContext.Provider>
  )
}

export default ShowMoneyAmmountProvider