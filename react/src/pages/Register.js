import './css/Register.css';
import  background from '../img/background.jpg';

function Register() {
  return (
    <div class="app">
        <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div> </div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img></div>
        <div class="BOX">
            <input class="mail" type="search" id="search" name="search" placeholder="Mail"></input>
            <input class="Login" type="search" id="search" name="search" placeholder="Username"></input>
            <input class="Password" type="search" id="search" name="search" placeholder="Password"></input>
            <input class="Password_Rpt" type="search" id="search" name="search" placeholder="Repeat password"></input>
            <button class="Register_btn" type="button">Register</button>        
        </div>
    </div>
  );
}
export default Register;