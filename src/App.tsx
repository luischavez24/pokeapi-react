import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavItem from "./shared/components/nav/NavItem";
import Nav from "./shared/components/nav/Nav";

export default function App() {
  return (
    <Router>
      <div>
        <Nav>
          <NavItem to="/">
            Home
          </NavItem>
          <NavItem to="/about">
            About
          </NavItem>
        </Nav>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
