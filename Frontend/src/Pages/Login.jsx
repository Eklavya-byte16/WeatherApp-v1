import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Cloud,
  CloudSun,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Wind,
  Droplets,
  Sun,
  Globe,
  Laptop,
  Apple,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";
import "./Login.css";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { GoogleIcon } from "../assets/icons/GoogleIcon";
import { AppleIcon } from "../assets/AppleIcon";

async function authenticate({ email, password }) {
  await new Promise((r) => setTimeout(r, 900));
  if (!email || !password) throw new Error("Enter your email and password.");
  return { ok: true };
}

/* ================================ BACKGROUND SCENE ================================ */
function BackgroundScene() {
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      left: (i * 53) % 100,
      delay: i * 0.6,
      duration: 9 + (i % 5),
    })),
  ).current;

  return (
    <div className="wsl-bg" aria-hidden="true">
      <div className="wsl-aurora wsl-aurora-1" />
      <div className="wsl-aurora wsl-aurora-2" />
      <div className="wsl-rays" />

      <div className="wsl-cloud wsl-cloud-1">
        <Cloud size={110} />
      </div>
      <div className="wsl-cloud wsl-cloud-2">
        <Cloud size={70} />
      </div>
      <div className="wsl-cloud wsl-cloud-3">
        <Cloud size={130} />
      </div>

      <div className="wsl-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="wsl-particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="wsl-fog" />

      <svg
        className="wsl-mountains"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,420 0,240 220,110 430,260 620,150 860,280 1080,120 1260,240 1440,180 1440,420"
          fill="rgba(9,27,58,0.55)"
        />
        <polygon
          points="0,420 0,300 260,200 520,320 760,220 1000,330 1250,230 1440,300 1440,420"
          fill="rgba(6,18,42,0.75)"
        />
      </svg>
      <svg
        className="wsl-mountains wsl-mountains-reflect"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,420 0,240 220,110 430,260 620,150 860,280 1080,120 1260,240 1440,180 1440,420"
          fill="rgba(9,27,58,0.35)"
        />
      </svg>
      <div className="wsl-lake" />
    </div>
  );
}

/* ==================================== NAVBAR ==================================== */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Features", "About"];

  return (
    <header className="wsl-nav">
      <div className="wsl-nav-inner">
        <div className="wsl-logo">
          <span className="wsl-logo-icon">
            <Cloud size={20} />
          </span>
          <span className="wsl-logo-text">WeatherSphere</span>
        </div>

        <nav className="wsl-nav-links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
          <a href="/" className="wsl-nav-back">
            <ArrowLeft size={15} /> Back to Landing
          </a>
        </nav>

        <button
          className="wsl-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`wsl-nav-mobile ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="/" onClick={() => setOpen(false)}>
          Back to Landing
        </a>
      </div>
    </header>
  );
}

/* =================================== LOGIN CARD =================================== */
function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
        await authenticate({ email, password });
        // React Router equivalent: navigate("/dashboard")
        window.location.href = "/dashboard";
      } catch (err) {
        setError(err.message || "Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    },
    [email, password],
  );

  return (
    <div className="wsl-card-wrap">
      <div className="wsl-card wsl-enter">
        <div className="wsl-card-head">
          <span className="wsl-logo-icon wsl-logo-icon-lg">
            <Cloud size={24} />
          </span>
          <h1>WeatherSphere</h1>
          <p>
            Welcome back.
            <br />
            Sign in to continue exploring the weather.
          </p>
        </div>

        <form className="wsl-form" onSubmit={handleSubmit}>
          <label className="wsl-field">
            <span className="wsl-field-icon">
              <Mail size={17} />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label className="wsl-field">
            <span className="wsl-field-icon">
              <Lock size={17} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="wsl-field-toggle"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <Eye size={17} /> : <EyeOff size={17} />}
            </button>
          </label>

          {error && <p className="wsl-error">{error}</p>}

          <div className="wsl-options-row">
            <label className="wsl-checkbox">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="wsl-checkbox-box" />
              Remember me
            </label>
            <a href="/forgot-password" className="wsl-forgot">
              Forgot password?
            </a>
          </div>

          <button className="wsl-submit" type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="wsl-divider">
          <span>OR</span>
        </div>

        <div className="wsl-social-row">
          <button
            type="button"
            className="wsl-social-btn"
            aria-label="Continue with Google"
          >
            <GoogleIcon size={18} /> Google
          </button>
          <button
            type="button"
            className="wsl-social-btn"
            aria-label="Continue with GitHub"
          >
            <GithubIcon size={18} /> GitHub
          </button>
          <button
            type="button"
            className="wsl-social-btn"
            aria-label="Continue with Apple"
          >
            <AppleIcon size={18} /> Apple
          </button>
        </div>

        <p className="wsl-bottom-text">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="wsl-signup-link">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

/* =================================== ROOT PAGE =================================== */
export default function LoginPage() {
  return (
    <div className="wsl-root">
      <BackgroundScene />
      <div className="wsl-content">
        <Navbar />
        <main className="wsl-center">
          <LoginCard />
        </main>
      </div>
    </div>
  );
}
