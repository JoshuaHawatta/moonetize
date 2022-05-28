import { createContext, useState } from "react";

export const ErrorMessagesContext = createContext({});

const ErrorMessagesProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');
  
  return (
    <ErrorMessagesContext.Provider value={{ errorMessage, setErrorMessage }}>
      { children }
    </ErrorMessagesContext.Provider>
  )
}

export default ErrorMessagesProvider