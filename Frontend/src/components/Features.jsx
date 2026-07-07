import {
  Cloud,
  Sun,
  CloudSun,
  ThermometerSun,
  MapPin,
  Gauge,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

function Features() {
  const [ref, visible] = useReveal(0.1);
  const items = [
    {
      Icon: Sun,
      title: "Live Weather Forecast",
      desc: "Real-time conditions refreshed the moment the sky changes.",
    },
    {
      Icon: CloudSun,
      title: "Hourly Forecast",
      desc: "Plan your day down to the hour with granular updates.",
    },
    {
      Icon: Cloud,
      title: "7-Day Forecast",
      desc: "A calm, clear view of the week ahead, before it happens.",
    },
    {
      Icon: ThermometerSun,
      title: "Previous Days Weather History",
      desc: "Look back at recorded conditions for any past date.",
    },
    {
      Icon: MapPin,
      title: "Multiple Cities Selection",
      desc: "Track forecasts for every city you care about, side by side.",
    },
    {
      Icon: Gauge,
      title: "Fast and Accurate Weather Data",
      desc: "Precision sourced data delivered without the lag.",
    },
  ];

  return (
    <section className="ws-section" id="features" ref={ref}>
      <div
        className={`ws-section-head ws-fade-up ${visible ? "is-visible" : ""}`}
      >
        <span className="ws-eyebrow">
          <Cloud size={14} /> Capabilities
        </span>
        <h2 className="ws-h2">Everything You Need To Understand The Weather</h2>
      </div>

      <div className="ws-features-grid">
        {items.map((f, i) => (
          <div
            key={f.title}
            className={`ws-feature-card ws-fade-up ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="ws-feature-icon">
              <f.Icon size={26} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;
