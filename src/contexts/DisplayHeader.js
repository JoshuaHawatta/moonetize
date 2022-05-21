import { createContext, useState } from 'react';

export const ShowOrHideHeaderContext = createContext({});

const ShowOrHideHeaderProvider = ({ children }) => {
  const [displayHeader, setDisplayHeader] = useState(false);

  return (
    <ShowOrHideHeaderContext.Provider value={{ displayHeader, setDisplayHeader }}>
      { children }
    </ShowOrHideHeaderContext.Provider>
  )
}

export default ShowOrHideHeaderProvider