import { useState } from "react"

const Navbar = () => {

  const [active, setactive] = useState(false)
  const handleActive = () => { setactive(!active) }

  return (
    <>
      <nav className="navbar">
        <header className="container header">
          <div className="logo">PEGEON</div>
          <ul className={`navLinks ${active ? "active" : ""}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Experts</li>
            <li>Pricing</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
          <div className="hamburgerMenu" onClick={handleActive}>djdfhdfjdskjfhkfjj</div>
        </header>
      </nav>
    </>
  )
}

export default Navbar