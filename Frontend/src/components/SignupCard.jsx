import { useState, useMemo, useCallback } from "react";
import {
  Cloud,
  User,
  Mail,
  Lock,
  AtSign,
  Eye,
  EyeOff,
  Apple,
} from "lucide-react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import PasswordStrength from "./PasswordStrength";
import FieldError from "./FieldError";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function createAccount(payload) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { ok: true, ...payload };
}

export default function SignupCard() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    wantAlerts: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: val }));
  };

  const passwordStrongEnough = useMemo(() => {
    const p = form.password;
    return (
      p.length >= 8 &&
      /[A-Z]/.test(p) &&
      /[a-z]/.test(p) &&
      /[0-9]/.test(p) &&
      /[^A-Za-z0-9]/.test(p)
    );
  }, [form.password]);

  const validate = useCallback(() => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    else if (!passwordStrongEnough)
      next.password = "Password doesn't meet all requirements.";
    if (!form.confirmPassword)
      next.confirmPassword = "Please confirm your password.";
    else if (form.confirmPassword !== form.password)
      next.confirmPassword = "Passwords don't match.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [form, passwordStrongEnough]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await createAccount(form);
      // React Router equivalent: navigate("/dashboard")
      window.location.href = "/dashboard";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wss-card wss-enter">
      <div className="wss-card-head">
        <span className="wss-logo-icon wss-logo-icon-lg">
          <Cloud size={24} />
        </span>
        <h1>Create Your Account</h1>
      </div>

      <form className="wss-form" onSubmit={handleSubmit} noValidate>
        <label className="wss-field">
          <span className="wss-field-icon">
            <User size={17} />
          </span>
          <input
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={set("fullName")}
            autoComplete="name"
          />
        </label>
        <FieldError message={errors.fullName} />

        <label className="wss-field">
          <span className="wss-field-icon">
            <Mail size={17} />
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={set("email")}
            autoComplete="email"
          />
        </label>
        <FieldError message={errors.email} />

        <label className="wss-field">
          <span className="wss-field-icon">
            <AtSign size={17} />
          </span>
          <input
            placeholder="Choose a username (optional)"
            value={form.username}
            onChange={set("username")}
            autoComplete="username"
          />
        </label>

        <label className="wss-field">
          <span className="wss-field-icon">
            <Lock size={17} />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={form.password}
            onChange={set("password")}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="wss-field-toggle"
            onClick={() => setShowPassword((s) => !s)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </label>
        <FieldError message={errors.password} />
        {form.password && <PasswordStrength password={form.password} />}

        <label className="wss-field">
          <span className="wss-field-icon">
            <Lock size={17} />
          </span>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={set("confirmPassword")}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="wss-field-toggle"
            onClick={() => setShowConfirm((s) => !s)}
            aria-label="Toggle confirm password visibility"
          >
            {showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </label>
        <FieldError message={errors.confirmPassword} />

        <button className="wss-submit" type="submit" disabled={loading}>
          {loading ? "Creating account…" : "Create Account"}
        </button>
      </form>

      <div className="wss-divider">
        <span>OR</span>
      </div>

      <div className="wss-social-row">
        <button
          type="button"
          className="wss-social-btn"
          aria-label="Sign up with Google"
        >
          <GoogleIcon size={18} /> Google
        </button>
      </div>

      <p className="wss-bottom-text">
        Already have an account?{" "}
        <a href="/login" className="wss-login-link">
          Sign In
        </a>
      </p>
    </div>
  );
}
