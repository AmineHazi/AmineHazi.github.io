import Navbar from "./components/Navbar";
import Partone from "./components/pages/Partone"
import Parttwo from "./components/pages/Parttwo"
import Partthree from "./components/pages/Partthree"
import Thl from "./components/pages/Thl"
import Madeby from "./components/pages/Madeby"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Thl/>} />
        <Route path="/Partone" element = {<Partone/>} />
        <Route path="/Parttwo" element = {<Parttwo/>} />
        <Route path="/Partthree" element = {<Partthree/>} />
        <Route path="/Madeby" element = {<Madeby/>} />
      </Routes>
    </Router>
  )
}


//test
export default App

