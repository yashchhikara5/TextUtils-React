import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(6, 6, 36)';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode} />
    <Alert alert ={alert} />
    <div className='container my-3'>
    
    <Routes> */
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} />}/>
      
      <Route exact path='/about' element={<About mode={mode}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
