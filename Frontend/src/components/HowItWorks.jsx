import { ArrowRight, Cloud, CloudSun, Search } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

function HowItWorks() {
  const [ref, visible] = useReveal(0.15);

  const steps = [
    {
      n: "01",
      title: "Search a city",
      desc: "Type any city, anywhere, and land on its live conditions instantly.",
      Icon: Search,
    },
    {
      n: "02",
      title: "View current weather",
      desc: "See temperature, feel, wind and humidity in one glass panel.",
      Icon: CloudSun,
    },
    {
      n: "03",
      title: "See forecasts and weather history",
      desc: "Scroll forward into the week, or back into recorded history.",
      Icon: Cloud,
    },
  ];

  return (
    <section className="ws-section" ref={ref}>
      <div
        className={`ws-section-head ws-fade-up ${visible ? "is-visible" : ""}`}
      >
        <span className="ws-eyebrow">
          <ArrowRight size={14} /> Workflow
        </span>

        <h2 className="ws-h2">How It Works</h2>
      </div>

      <div className="ws-timeline">
        {steps.map((step, index) => (
          <div key={step.n} style={{ display: "contents" }}>
            <div
              className={`ws-timeline-card ws-fade-up ${
                visible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="ws-timeline-num">{step.n}</div>

              <div className="ws-timeline-icon">
                <step.Icon size={22} />
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`ws-timeline-arrow ${visible ? "is-visible" : ""}`}
              >
                <ArrowRight size={22} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
