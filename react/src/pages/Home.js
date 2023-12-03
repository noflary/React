import './css/Home.css';
import  background from '../img/background.jpg';
import React from 'react';
import { useState } from 'react';

function Home() {
  let homeInput = React.createRef();
  let homeOut = React.createRef();
  const [outputHome, setOutputHome] = useState('');

  function valueHome() {
    console.log(homeInput.current.value);
    setOutputHome(homeInput.current.value)
  }

  function send() {
    console.log(outputHome);
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
        <div class="Box"><div class="rectangle"></div></div>
    </div>
  );
}
export default Home;