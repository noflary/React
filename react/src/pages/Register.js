import './css/Register.css';
import  background from '../img/background.jpg';
import React from 'react';
import { useState } from 'react';

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

  function registration() {
    console.log(outputLog, outputMail, outputPass, outputPassRpt);

    const fillPostList = (posts) => {
      postsList.innerHTML = "";

      if (posts.lenght) {
        posts.forEach((post, index) => postsList.innerHTML += createPost(post, index)); 
        };
    }
    getPostsBtn.addEventListener('click', async () => {
      await getPostsRequest();
      fillPostList(state.posts);
    })

    function getPostsRequest() {
      return fetch("http://127.0.0.1:8000/", {
       headers: {
        "username":"user", "email":"email@example.com", "password":"password"
      }
    })
    .then((res) => res.json())
    .then((posts) => state.posts = state.posts.concat(posts))
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
            <button class="Register_btn" type="button" onClick={registration}>Register</button>        
        </div>
    </div>
  );
}
export default Register;