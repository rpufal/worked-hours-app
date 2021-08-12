import Login from '../components/Login';
import Signup from '../components/Signup';
import {useContext, useEffect, useState} from 'react';
import { MainPage } from '../styles/pages/Home';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <MainPage>
      <div className="main-content">
      <h1>WorkForce</h1>
        <div className="modal-button">
          <button className="show-modal" onClick={() => setShowLogin(!showLogin)}>Log In</button>
          <button className="show-modal"  onClick={() => setShowSignup(!showSignup)}>Sign up</button>
        </div>
      </div>
      <div className={`modal-background ${showLogin}`}><Login setShowLogin={setShowLogin}/></div>
      <div className={`modal-background ${showSignup}`}><Signup setShowSignup={setShowSignup}/></div>
    </MainPage>
  )
}
