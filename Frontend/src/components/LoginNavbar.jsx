import { useState } from "react";
import { Cloud, ArrowLeft, Menu, X } from "lucide-react";

function LoginNavbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Features", "About"];

  return (
    <header className="wsl-nav">
      <div className="wsl-nav-inner">
        {/* Logo */}
        <div className="wsl-logo">
          <span className="wsl-logo-icon">
            <Cloud size={20} />
          </span>
          <span className="wsl-logo-text">WeatherSphere</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="wsl-nav-links">
          {links.map((link) => (
            <a key={link} href={`/#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}

          <a href="/" className="wsl-nav-back">
            <ArrowLeft size={15} />
            Back to Landing
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="wsl-burger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`wsl-nav-mobile ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`/#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}

        <a href="/" onClick={() => setOpen(false)}>
          <ArrowLeft size={15} />
          Back to Landing
        </a>
      </div>
    </header>
  );
}

export default LoginNavbar;
