import { SignupDisplay } from "./styles/SignupDisplay";
import { useState, useEffect, useContext  } from "react";
import Router from 'next/router';
import AppContext from "../../context/AppContext";

export default function Signup({setShowSignup}) {
  const [ signupInfo , setSignupInfo ] = useState({
    email: '',
    expectedHours: '',
    password: '',
  });
  const {setLoggedIn} = useContext(AppContext);
  const [okLogin, setOkLogin] = useState(false);
  const {email, password, expectedHours} = signupInfo;
  
  useEffect(() => {
    const okEmail = email.length >= 8;
    const okPassword = password.length >= 8;
    const okHours = expectedHours > 0;
    if ( okEmail && okPassword && okHours) {
      setOkLogin(true);
      return null
    }
    setOkLogin(false)
  } ,[signupInfo]);

  const loginFunc = () => {
    setLoggedIn(true)
    sessionStorage.setItem('loginState', true);
    setShowSignup(false);
    Router.push('/user')
  }
  return (
    <SignupDisplay>
      <div className="message">
        <h2>Nice to meet ya!</h2>
      </div>
      <form>
        <label>
          E-mail:
          <input 
            placeholder="E-mail" 
            type="text"
            value={email}
            onChange={({target}) => setSignupInfo({...signupInfo, email: target.value})}
          />
        </label>
        <label>
          Password:
          <input 
            placeholder="Password" 
            type="text"
            value={password}
            onChange={({target}) => setSignupInfo({...signupInfo, password: target.value})}
          />
        </label>
        <label>
          Expected work hours:
          <input 
            placeholder="Tell us your expected workload" 
            type="text"
            value={expectedHours}
            onChange={({target}) => setSignupInfo({...signupInfo, expectedHours: target.value})}
          />
        </label>
      </form>
      <div className="button">
        <button
          className="signup-button"
          type="button"
          // disabled={!okLogin}
          onClick={loginFunc}
        >Log in
        </button>
        <button type="button" onClick={() => setShowSignup(false)}>Cancel</button>
      </div>
    </SignupDisplay>
  )
}