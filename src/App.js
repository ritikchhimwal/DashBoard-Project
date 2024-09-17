import React from 'react'
import './App.css';
import Header from './components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header/>
      <SideBar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App