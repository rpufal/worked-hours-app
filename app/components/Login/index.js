import { LoginDisplay } from "./styles/LoginDisplay"
import { useState, useEffect, useContext  } from "react"
import Router from 'next/router';
import AppContext from "../../context/AppContext";

export default function Login({setShowLogin}) {
  const [ loginInfo , setLoginInfo ] = useState({
    email: '',
    password: '',
  });
  const {setLoggedIn} = useContext(AppContext);
  const [okLogin, setOkLogin] = useState(false);
  const {email, password} = loginInfo;
  
  useEffect(() => {
    const okEmail = email.length >= 8;
    const okPassword = password.length >= 8; 
    if ( okEmail && okPassword) {
      setOkLogin(true);
      return null
    }
    setOkLogin(false)
  } ,[loginInfo]);

  const loginFunc = () => {
    setLoggedIn(true)
    sessionStorage.setItem('loginState', true);
    setShowLogin(false);
    Router.push('/user');
  }
  return (
    <LoginDisplay>
      <div className="message">
        <h2>Welcome back</h2>
      </div>
      <form>
        <label>
          E-mail:
          <input 
            placeholder="E-mail" 
            type="text"
            value={email}
            onChange={({target}) => setLoginInfo({...loginInfo, email: target.value})}
          />
        </label>
        <label>
          Password:
          <input 
            placeholder="Password" 
            type="text"
            value={password}
            onChange={({target}) => setLoginInfo({...loginInfo, password: target.value})}
          />
        </label>
      </form>
      <div className="button">
        <button
          className="login-button"
          type="button"
          disabled={!okLogin}
          onClick={loginFunc}
        >Log in
        </button>
        <button type="button" onClick={() => setShowLogin(false)}>Cancel</button>
      </div>
    </LoginDisplay>
  )
}