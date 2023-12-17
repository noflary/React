import './css/Register.css';
import  background from '../img/background.jpg';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  let mailInput = React.createRef();
  let mailOut = React.createRef();
  const [outputMail, setOutputMail] = useState('');

  let logInput = React.createRef();
  let logOut = React.createRef();
  const [outputLog, setOutputLog] = useState('');

  let passInput = React.createRef();
  let passOut = React.createRef();
  const [outputPass, setOutputPass] = useState('');

  let passRptInput = React.createRef();
  let passRptOut = React.createRef();
  const [outputPassRpt, setOutputPassRpt] = useState('');

  const [display, setDisplay] = useState('');

  function valueMail() {
    console.log(mailInput.current.value);
    setOutputMail(mailInput.current.value)
  }

  function valueLog() {
    console.log(logInput.current.value);
    setOutputLog(logInput.current.value)
  }
  function valuePass() {
    console.log(passInput.current.value);
    setOutputPass(passInput.current.value)
  }

  function valuePassRpt() {
    console.log(passRptInput.current.value);
    setOutputPassRpt(passRptInput.current.value)
  }

  const send = () => {
    console.log(JSON.stringify(outputLog, outputPass))
    axios.post('http://127.0.0.1:8000/register', {
      method: 'POST',
      body: JSON.stringify(outputLog, outputPass),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
    }).then(function(res) { 
    setDisplay(res.data.username)
    })
  }

  return (
    <div class="app">
        <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div> </div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img></div>
        <div class="BOX">
            <input class="mail" type="search" id="search" name="search" placeholder="Mail" onInput={valueMail} ref={mailInput}></input>
            <input class="Login" type="search" id="search" name="search" placeholder="Username" onInput={valueLog} ref={logInput}></input>
            <input class="Password" type="search" id="search" name="search" placeholder="Password" onInput={valuePass} ref={passInput}></input>
            <input class="Password_Rpt" type="search" id="search" name="search" placeholder="Repeat password" onInput={valuePassRpt} ref={passRptInput}></input>
            <button id="form_btn" class="Register_btn" type="button" onClick={send}>Register</button>        
        </div>
        <div class="rectangle">{display !='' ? JSON.stringify(display) : setDisplay()}</div>
    </div>
    );
  }
export default Register;