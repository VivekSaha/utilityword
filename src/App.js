import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has Enabled!", 'success');
      document.title = 'TextUtil - Darkmode';
      // setInterval(() => {
      //   document.title = 'TextUtil - ZigZak';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtil - No Issue';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has Enabled!", 'success');
      document.title = 'TextUtil - Lightmode'
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm heading="Enter the text to Analyse." mode={mode} showAlert={showAlert} />
        <About />
          {/* <Routes>                             */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to Analyse." mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />  */}
          {/* </Routes> */}
        </div>
      {/* </Router>       */}
    </>
  );
}

export default App;
