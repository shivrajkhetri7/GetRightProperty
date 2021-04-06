import { Router } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from "./Component/About/AboutPage"
import Contact from "./Component/ContactPage/ContactPage"


function App() {
  return (
    <div className="App">
      <About/>
    </div>
  );
}

export default App;
