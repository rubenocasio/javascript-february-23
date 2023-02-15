import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";
import About from "./components/About";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Hello, I'm home</h1>} />
        <Route path="/aboutus" element={<About /> } />
        
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:city" element={<Teams />} />
        <Route path="/teams/:city/:color" element={<Teams />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;

//http://localhost:3000/teams/Hello