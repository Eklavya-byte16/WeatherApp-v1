import { AlertCircle } from "lucide-react";

export default function FieldError({ message }) {
  return (
    <div className={`wss-field-error ${message ? "is-visible" : ""}`}>
      {message && (
        <>
          <AlertCircle size={12} />
          <span>{message}</span>
        </>
      )}
    </div>
  );
}
