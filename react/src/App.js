import logo from './logo.svg';
import React, { Component } from "react";
import Home from './pages/Home';
import Credits from './pages/Credits';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <Routes>
        <Route path="/" element={<Credits />}/>
        <Route path="/chat" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login/register" element={<Register />}/>
      </Routes>
    )
  }
}
export default App;