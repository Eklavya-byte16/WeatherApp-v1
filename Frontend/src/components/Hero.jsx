import { useReveal } from "../hooks/useReveal";
import {
  Sun,
  CloudSun,
  CloudRain,
  Cloud,
  Droplets,
  Wind,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Hero({ onSignIn }) {
  const [ref, visible] = useReveal(0.1);

  const hourly = [
    { h: "Now", t: 24, Icon: Sun },
    { h: "1PM", t: 25, Icon: CloudSun },
    { h: "2PM", t: 25, Icon: CloudSun },
    { h: "3PM", t: 23, Icon: CloudRain },
    { h: "4PM", t: 22, Icon: Cloud },
  ];

  return (
    <section className="ws-section ws-hero" id="home" ref={ref}>
      <div className="ws-hero-grid">
        <div className={`ws-fade-right ${visible ? "is-visible" : ""}`}>
          <span className="ws-eyebrow">
            <Sun size={14} /> Live global forecasting
          </span>

          <h1 className="ws-h1">Know Tomorrow Before It Arrives</h1>

          <p className="ws-lead">
            Accurate forecasts, previous weather records, hourly updates and
            forecasts for multiple cities — all in one beautiful dashboard.
          </p>

          <div className="ws-hero-actions">
            <button
              className="ws-btn ws-btn-primary ws-btn-lg"
              onClick={onSignIn}
            >
              Get Started <ArrowRight size={18} />
            </button>

            <a href="#features" className="ws-btn ws-btn-ghost ws-btn-lg">
              Explore Features
            </a>
          </div>
        </div>

        <div className={`ws-fade-left ${visible ? "is-visible" : ""}`}>
          <div className="ws-weather-card ws-floaty">
            <div className="ws-wc-top">
              <div className="ws-wc-city">
                <MapPin size={14} />
                Kolhāpur, IN
              </div>

              <CloudSun size={30} />
            </div>

            <div className="ws-wc-temp">
              24<span>°</span>
              <span className="ws-wc-condition">Partly Cloudy</span>
            </div>

            <div className="ws-wc-range">
              <span>H: 27°</span>
              <span>L: 19°</span>
              <span>Feels like 25°</span>
            </div>

            <div className="ws-wc-divider" />

            <div className="ws-wc-hourly">
              {hourly.map(({ h, t, Icon }) => (
                <div className="ws-wc-hour" key={h}>
                  <span>{h}</span>
                  <Icon size={18} />
                  <span>{t}°</span>
                </div>
              ))}
            </div>

            <div className="ws-wc-divider" />

            <div className="ws-wc-stats">
              <div>
                <Droplets size={16} />
                <span>Humidity</span>
                <strong>62%</strong>
              </div>

              <div>
                <Wind size={16} />
                <span>Wind</span>
                <strong>11 km/h</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
