import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //shows if darkmode is enabled or not.
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("blue");
  const [theme, setTheme] = useState({
      btnColor: "primary",
      bgColor: "rgb(11 32 45)"
  });

  const colorSelected = (value) =>{
    setColor(value);
    if(mode === "dark"){
      switch(value){
        case "blue":
          document.body.style.backgroundColor = "rgb(11 32 45)";
          setTheme({
            btnColor: "primary",
            bgColor: "rgb(11 32 45)"
          })
          break;
        case "green":
          document.body.style.backgroundColor = "rgb(16 35 20)";
          setTheme({
            btnColor: "success",
            bgColor: "rgb(16 35 20)"
          })
          break;
        case "red":
          document.body.style.backgroundColor = "rgb(47 17 17)";
          setTheme({
            btnColor: "danger",
            bgColor: "rgb(47 17 17)"
          })
          break;
        default:
         document.body.style.backgroundColor = "rgb(40 40 40)";
      }
    }
    else{
      switch(value){
        case "blue":
          setTheme({
            btnColor: "primary"
          })
          break;
        case "green":
          setTheme({
            btnColor: "success"
          })
          break;
        case "red":
          setTheme({
            btnColor: "danger"
          })
          break;
        default:
         break;
      }
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      switch(color){
        case "blue":
          document.body.style.backgroundColor = "rgb(11 32 45)";
          setTheme({
            btnColor: "primary",
            bgColor: "rgb(11 32 45)"
          })
          break;
        case "green":
          document.body.style.backgroundColor = "rgb(16 35 20)";
          setTheme({
            btnColor: "success",
            bgColor: "rgb(16 35 20)"
          })
          break;
        case "red":
          document.body.style.backgroundColor = "rgb(47 17 17)";
          setTheme({
            btnColor: "danger",
            bgColor: "rgb(47 17 17)"
          })
          break;
        default:
         document.body.style.backgroundColor = "rgb(40 40 40)";
      }
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }

  }

  return (
    <>
    <Router>
      <Navbar colorSelected={colorSelected} title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path={process.env.PUBLIC_URL +"/about"} element={<About darkTheme={theme} mode={mode} />}></Route>
          <Route exact path={process.env.PUBLIC_URL +"/"} element={<TextForm darkTheme={theme} showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
