import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="DeepShield Logo"
            className="logo-image"
          />

          <h2>DeepShield</h2>
        </Link>
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/upload">
          Upload
        </Link>

      </div>

    </nav>
  );
}