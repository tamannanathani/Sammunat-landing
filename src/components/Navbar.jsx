import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Samm<span className="logo-accent">unat</span>
      </h2>
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="nav-link">
            Features
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
