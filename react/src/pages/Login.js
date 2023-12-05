import './css/Login.css';
import  background from '../img/background.jpg';
import React from 'react';
import { useState } from 'react';


function Login() {

  let logInput = React.createRef();
  let logOut = React.createRef();
  const [outputLog, setOutputLog] = useState('');

  let passInput = React.createRef();
  let passOut = React.createRef();
  const [outputPass, setOutputPass] = useState('');

  function valueLog() {
    console.log(logInput.current.value);
    setOutputLog(logInput.current.value)
  }
  function valuePas() {
    console.log(passInput.current.value);
  }

  function autorize() {
    console.log(outputLog, outputPass);
    /*async componenttDidMounth() {
      const response = await fetch('http://127/0/0/1:8000')
      const data = await response.json()
      this.setState({"email":"email@example.com", "password":"password"})
    
    }*/
  }

  return (
    <div class="app">
        <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div> </div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img></div>
        <div class="box">
            <input class="Login" type="search" id="search" name="search" placeholder="Your username or mail" onInput={valueLog} ref={logInput}></input>
            <input class="Password" type="search" id="search" name="search" placeholder="Your password" onInput={valuePas} ref={passInput}></input>
            <p class="Register">If you don't have an account <a href='/login/register'>Register</a> in one click!</p>
            <button class="Login_btn" type="button" onClick={autorize}>Login</button>   
        </div>
    </div>
  );
}
export default Login;