import './css/Login.css';
import  background from '../img/background.jpg';

function Login() {
  return (
    <div class="app">
        <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div> </div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img></div>
        <div class="box">
            <input class="Login" type="search" id="search" name="search" placeholder="Your username or mail"></input>
            <input class="Password" type="search" id="search" name="search" placeholder="Your password"></input>
            <p class="Register">If you don't have an account <a href='/login/register'>Register</a> in one click!</p>
            <button class="Login_btn" type="button">Login</button>        
        </div>
    </div>
  );
}
export default Login;
