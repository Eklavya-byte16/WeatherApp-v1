import Counter from "./Counter";
import { useReveal } from "../hooks/useReveal";

function Statistics() {
  const [ref, visible] = useReveal(0.4);

  const stats = [
    { to: 100, suffix: "+", label: "Cities Supported" },
    { to: 99, suffix: "%", label: "Forecast Accuracy" },
    { to: 24, suffix: "/7", label: "Live Updates" },
    { to: 7, suffix: " Days", label: "Forecast Range" },
  ];

  return (
    <section className="ws-section" ref={ref}>
      <div
        className={`ws-stats-panel ws-fade-up ${visible ? "is-visible" : ""}`}
      >
        {stats.map((stat) => (
          <div className="ws-stat" key={stat.label}>
            <div className="ws-stat-num">
              <Counter to={stat.to} suffix={stat.suffix} start={visible} />
            </div>

            <div className="ws-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
