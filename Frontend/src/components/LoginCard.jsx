import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { Cloud, Mail, Lock, Eye, EyeOff } from "lucide-react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import AppleIcon from "../assets/icons/AppleIcon";

const API_BASE = import.meta.env.VITE_BACKEND_URL;

function LoginCard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setError("");
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ access_token: tokenResponse.access_token }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error?.message || "Google sign-in failed.");
        }

        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } catch (err) {
        setError(err.message || "Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    },
    onError: () => setError("Google sign-in failed."),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // *************************************** Auth Starts *************************************************************

    const { email, password } = formData;

    if (!email || !password) {
      setError("Enter your email and password.");
      return;
    }
    if (password.length < 8) {
      setError("Password needs at least 8 characters.");
      return;
    }
    if (password.length > 64) {
      setError("Password is too long.");
      return;
    }
    // *************************************** Auth ends *************************************************************

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error?.message || "Invalid email or password.");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="wsl-field">
            <span className="wsl-field-icon">
              <Lock size={17} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
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
            onClick={() => handleGoogleSignup()}
          >
            <GoogleIcon size={18} />
            Google
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
