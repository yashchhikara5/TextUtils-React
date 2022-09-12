import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

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

  const toggleMode = () =>{
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
    {/* <BrowserRouter> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode} />
    <Alert alert ={alert} />
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} />
    {/* <Routes> */}
      {/* <Route exact path="/" element={}/> */}
      
      {/* <Route exact path='/about' element={<About/>}/> */}
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
