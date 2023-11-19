import './css/Home.css';
import  background from '../img/background.jpg';

function Home() {
  return (
    <div class="app">
      <div class="header"> <div class="text-wrapper"><a href='/'>Prompt ai assistent</a></div></div>
        <div class="infotable"><img class="background" src={background} alt="Credits"></img>
            <div class="text-field">
                <input class="text-field__input" type="input" id="input" name="input" placeholder="Input"></input>
                <button class="text-field__btn" type="button">Send</button>
            </div>
        </div>
        <div class="Box"><div class="rectangle"></div></div>
    </div>
  );
}
export default Home;
