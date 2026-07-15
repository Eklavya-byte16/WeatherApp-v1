import { Check } from "lucide-react";

export default function PasswordStrength({ password }) {
  const rules = [
    {
      key: "len",
      label: "At least 8 characters",
      test: (p) => p.length >= 8,
    },
    {
      key: "upper",
      label: "One uppercase letter",
      test: (p) => /[A-Z]/.test(p),
    },
    {
      key: "lower",
      label: "One lowercase letter",
      test: (p) => /[a-z]/.test(p),
    },
    {
      key: "num",
      label: "One number",
      test: (p) => /[0-9]/.test(p),
    },
    {
      key: "special",
      label: "One special character",
      test: (p) => /[^A-Za-z0-9]/.test(p),
    },
  ];

  return (
    <ul className="wss-pw-rules">
      {rules.map((rule) => {
        const passed = rule.test(password);

        return (
          <li key={rule.key} className={passed ? "is-ok" : ""}>
            <Check size={12} />
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
}
