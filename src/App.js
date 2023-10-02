// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed zindex top-0 w-full"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="sky-alarabia" element={<Home />} />
          <Route path="sky-arabia" element={<Home />} />
          <Route path="sky-project" element={<Home />} />
          {/* <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="Projects" element={<Projects/>} />
          <Route path="Contact" element={<Contact/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
