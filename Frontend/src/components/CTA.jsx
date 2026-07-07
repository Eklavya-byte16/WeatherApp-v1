import { Cloud, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

function CTA({ onSignIn }) {
  const [ref, visible] = useReveal(0.3);

  return (
    <section className="ws-section" ref={ref}>
      <div className={`ws-cta-card ws-fade-up ${visible ? "is-visible" : ""}`}>
        <Cloud size={30} />

        <h2>Ready to Explore the Weather?</h2>

        <p>
          Create your dashboard and get accurate forecasts wherever you are.
        </p>

        <button className="ws-btn ws-btn-primary ws-btn-lg" onClick={onSignIn}>
          Sign In <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default CTA;
