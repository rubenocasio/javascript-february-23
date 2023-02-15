import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";
import About from "./components/About";
import Teams from "./components/Teams";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Hello, I'm home</h1>} />
        <Route path="/aboutus" element={ <About /> } />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:city" element={<Teams />} />
        <Route path="/teams/:city/:color" element={<Teams />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about/:name/:comment" element={<About />} />

      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;

//http://localhost:3000/teams/Hello