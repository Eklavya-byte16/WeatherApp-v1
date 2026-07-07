import { useState, useCallback } from "react";
import { Cloud, Mail, Lock, Eye, EyeOff } from "lucide-react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import AppleIcon from "../assets/icons/AppleIcon";

// Replace this with your actual authentication function
async function authenticate({ email, password }) {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!email || !password) {
    throw new Error("Enter your email and password.");
  }

  return { ok: true };
}

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

        // Replace with React Router navigate() later
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
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="wsl-field-toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
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
            {loading ? "Signing in..." : "Sign In"}
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
            <GoogleIcon size={18} />
            Google
          </button>

          <button
            type="button"
            className="wsl-social-btn"
            aria-label="Continue with GitHub"
          >
            <GithubIcon size={18} />
            GitHub
          </button>

          <button
            type="button"
            className="wsl-social-btn"
            aria-label="Continue with Apple"
          >
            <AppleIcon size={18} />
            Apple
          </button>
        </div>

        <p className="wsl-bottom-text">
          Don't have an account?{" "}
          <a href="/signup" className="wsl-signup-link">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginCard;
