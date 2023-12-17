import './css/Credits.css';
import React from 'react';
import  background from '../img/background.jpg';

function Page404() {
return (
  <div class="app">
      <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div> </div>
      <div class="infotable"><img class="background" src={background} alt="Credits"></img></div>
      <div>
         Page not found
      </div>
  </div>
  );
}
export default Page404;