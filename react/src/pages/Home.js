import './css/Home.css';
import  background from '../img/background.jpg';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Home() {
  let homeInput = React.createRef();
  const [outputHome, setOutputHome] = useState('');
  const [display, setDisplay] = useState('');

  function valueHome() {
    setOutputHome(homeInput.current.value)
  }



  const send = () => {
    console.log(JSON.stringify(outputHome))
    axios.post('http://127.0.0.1:8000/home', {
      method: 'POST',
      body: JSON.stringify(outputHome),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   }).then(function(res) { 
    setDisplay(res.data.data)
   })
  }

  return (
    <div class="app">
      <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div></div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img>
            <div class="text-field">
                <input class="text-field__input" type="input" id="input" name="input" placeholder="Input" onInput={valueHome} ref={homeInput}></input>
                <button class="text-field__btn" type="button" onClick={send}>Send</button>
            </div>
        </div>
        <div class="Box"><div class="rectangle">{display !='' ? JSON.stringify(display) : setDisplay()}</div></div>
    </div>
  );
}
export default Home;
