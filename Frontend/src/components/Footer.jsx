import { Cloud } from "lucide-react";

function Footer() {
  return (
    <footer className="ws-footer">
      <div className="ws-footer-inner">
        <div className="ws-logo">
          <span className="ws-logo-icon">
            <Cloud size={20} />
          </span>

          <span className="ws-logo-text">WeatherSphere</span>
        </div>

        <nav className="ws-footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="ws-footer-copy">
          © {new Date().getFullYear()} WeatherSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
