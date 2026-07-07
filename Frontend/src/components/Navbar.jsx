import { useState } from "react";
import { Cloud, Menu, X } from "lucide-react";

function Navbar({ onSignIn }) {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Features", "About"];

  return (
    <header className="ws-nav">
      <div className="ws-nav-inner">
        <div className="ws-logo">
          <span className="ws-logo-icon">
            <Cloud size={22} />
          </span>
          <span className="ws-logo-text">WeatherSphere</span>
        </div>

        <nav className="ws-nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>

        <button className="ws-btn ws-btn-primary ws-nav-cta" onClick={onSignIn}>
          Sign In
        </button>

        <button
          className="ws-burger"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`ws-nav-mobile ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}

        <button
          className="ws-btn ws-btn-primary"
          onClick={() => {
            setOpen(false);
            onSignIn();
          }}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Navbar;
