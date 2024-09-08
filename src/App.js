import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';



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
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has Enabled!", 'success');
    }
  }
  return (
    <>
      <Navbar title="Words Utility" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm heading="Enter your text below the box to Analyse." mode={mode} showAlert={showAlert} />
        </div>
      <Footer mode={mode}/>
    </>
  );
}

export default App;
