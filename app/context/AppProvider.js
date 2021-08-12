import {  useEffect, useState  } from "react";
import AppContext from './AppContext';


const AppProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
    const loginState = sessionStorage.getItem('loginState');
    setLoggedIn(loginState || false)
  },[])

  const context = {
    loggedIn,
    setLoggedIn
  }
  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;