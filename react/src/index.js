import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*function Credits() {
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
             Страница не найдена
            </div>
        </div>
      </div>
    );
  }
  export default Credits;*/