import { CloudSun, Umbrella, Droplets, Wind, Eye, Gauge } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

function Preview() {
  const [ref, visible] = useReveal(0.1);

  const tiles = [
    {
      Icon: CloudSun,
      label: "Today's Weather",
      value: "24° Partly Cloudy",
    },
    {
      Icon: Umbrella,
      label: "Rain Chance",
      value: "18%",
    },
    {
      Icon: Droplets,
      label: "Humidity",
      value: "62%",
    },
    {
      Icon: Wind,
      label: "Wind",
      value: "11 km/h",
    },
    {
      Icon: Eye,
      label: "Air Quality",
      value: "Good · AQI 42",
    },
    {
      Icon: Gauge,
      label: "UV Index",
      value: "4 · Moderate",
    },
  ];

  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekTemps = [26, 27, 24, 22, 25, 28, 27];

  return (
    <section className="ws-section" id="about" ref={ref}>
      <div
        className={`ws-section-head ws-fade-up ${visible ? "is-visible" : ""}`}
      >
        <span className="ws-eyebrow">
          <Gauge size={14} /> Inside the dashboard
        </span>

        <h2 className="ws-h2">One Calm Screen For The Whole Forecast</h2>
      </div>

      <div className={`ws-dashboard ws-fade-up ${visible ? "is-visible" : ""}`}>
        <div className="ws-dashboard-tiles">
          {tiles.map((tile) => (
            <div className="ws-dash-tile" key={tile.label}>
              <tile.Icon size={20} />

              <div>
                <span>{tile.label}</span>
                <strong>{tile.value}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="ws-dash-week">
          {week.map((day, index) => (
            <div className="ws-dash-day" key={day}>
              <span>{day}</span>
              <CloudSun size={18} />
              <strong>{weekTemps[index]}°</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preview;
