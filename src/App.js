import "./App.css";
import Navabr from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Happy from "./components/services/Happy";
import Goals from "./components/services/Goals"
import Sad from "./components/services/Sad"
import Mantra from "./components/Mantra"


import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navabr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service/happy" element={<Happy />} />
          <Route exact path="/service/goals" element={<Goals />} />
          <Route exact path="/service/sad" element={<Sad />} />
          <Route exact path="/mainmantra" element={<Mantra />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
