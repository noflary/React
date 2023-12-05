import React, { Component } from "react";
import Home from './pages/Home';
import Credits from './pages/Credits';
import Login from './pages/Login';
import Register from './pages/Register';
//import Page404 from './pages/Page404';
import { Routes, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <Routes>
        <Route path="/" element={<Credits />}/>
        <Route path="/chat" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login/register" element={<Register />}/>
        {/* <!--<Route path="*" element={<Page404 />} />-- */}
      </Routes>
    )
  }
}
export default App;