import './css/Credits.css';
import { useState } from 'react';
import axios from 'axios';
import  background from '../img/background.jpg';
import { useNavigate } from 'react-router-dom';


function Credits() {
  const navigate = useNavigate()
  return (
    <div class="app">
      <div class="header">
        <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div>
        <button class="Start_btn" onClick={() => navigate('/chat')}>Start</button>
        <button class="SignIn_btn" onClick={() => navigate('/login')}>Sign in</button>
      </div>
      <div class="infotable">
      <img class="background" src={background} alt="Credits"></img>
          <div class="description">
            short description
            +-----------------------------------------------------------------------------------------------------------------
          </div>
          <div class="reason">
            why did we do this
            ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </div>
          <div class="contacts">
            our contacts ---------------------------------------------------------------------------------------------------
          </div>
      </div>
    </div>
  );
}
export default Credits;