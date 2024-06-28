import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import Alert from './components/Alert.jsx';

function App() {

  const [mode, setMode] = useState('light');

  const [btnText, newBtnText] = useState('Enable Dark  Mode');

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
      // setMyText("Enable Light Mode");
      showAlert("Dark Mode Has Been Enable", "success")
      newBtnText('Enable Light Mode');
      // document.title="Dark Mode";

      // setInterval(() => {
      //   document.title = "SIT - text-mechanic"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "SIT - Bsc.IT"
      // }, 1500);

    } else {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      // setMyText("Enable Dark Mode");
      showAlert("Light Mode Has Been Enable", "success");
      newBtnText('Enable Dark Mode');
      // document.title="Light Mode";
    }
  }


  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }



  return (
    <>
    
      <Navbar title="Text Mechanic" aboutText="Contact Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      <TextForm heading="Repair Your Text Here" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      
    </>
  );
}

export default App;
