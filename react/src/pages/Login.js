import './css/Login.css';
import  background from '../img/background.jpg';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';



function Login() {
  

  let logInput = React.createRef();
  const [outputMail, setOutputLog] = useState('');

  let passInput = React.createRef();
  const [outputPass, setOutputPass] = useState('');

  const [display, setDisplay] = useState('');
  

  function valueLog() {
    console.log(logInput.current.value);
  }
  
  function valuePas() {
    console.log(passInput.current.value);
  }

  const send = () => {
    setOutputLog(logInput.current.value)
    setOutputPass(logInput.current.value)
    console.log(JSON.stringify(outputMail, outputPass))
    axios.post('http://127.0.0.1:8000/login', {
      method: 'POST',
      body: JSON.stringify(outputMail, outputPass),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
    }).then(function(res) { 
    setDisplay(res.data.token)
    window.localStorage.getItem(res.data.token);
    })
  }
  
  return (
    <div class="app">
        <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div><div class="username"><a href='/'>{outputMail}</a></div> </div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img></div>
        <div class="box">
            <input class="Login" type="search" id="search" name="search" placeholder="Your username or mail" onInput={valueLog} ref={logInput}></input>
            <input class="Password" type="search" id="search" name="search" placeholder="Your password" onInput={valuePas} ref={passInput}></input>
            <p class="Register">If you don't have an account <a href='/login/register'>Register</a> in one click!</p>
            <button class="Login_btn" type="button" onClick={send}>Login</button>   
        </div>
        <div class="rectangle">{display !='' ? JSON.stringify(display) : setDisplay()}</div>
    </div>
  );
}
export default Login;
