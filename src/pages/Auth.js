import { async } from '@firebase/util';
import { authService, firebaseInstance } from 'fbase';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if(name === "email"){
      setEmail(value)
    }else if (name==='password'){
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data
      const auth = getAuth()
      if(newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch(error) {
      setError(error.message);
      }
    };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) =>{
    const {target:{name}} = event;
    let provider;
    if(name === 'google'){
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data)
  }

  return (
    <>
      <form onSubmit={onSubmit}> 
        <input 
          name='email'
          type="email" 
          placeholder='ID' 
          required 
          value={email}
          onChange={onChange}
          />
        <input 
          name='password'
          type="password" 
          placeholder='Password' 
          required 
          value={password}
          onChange={onChange}
          />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'}/>
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Log in" : 'create Account'}</span>
      <div>
        <button onClick={onSocialClick} name='google'>Continue with Google</button>
      </div>


    </>
  )
}

export default Auth