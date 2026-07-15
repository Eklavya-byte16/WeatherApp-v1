import { useRef } from "react";
import { Cloud } from "lucide-react";

export default function SignupBackgroundScene() {
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      left: (i * 53) % 100,
      delay: i * 0.6,
      duration: 9 + (i % 5),
    })),
  ).current;

  return (
    <div className="wss-bg" aria-hidden="true">
      <div className="wss-aurora wss-aurora-1" />
      <div className="wss-aurora wss-aurora-2" />
      <div className="wss-rays" />

      <div className="wss-cloud wss-cloud-1">
        <Cloud size={110} />
      </div>

      <div className="wss-cloud wss-cloud-2">
        <Cloud size={70} />
      </div>

      <div className="wss-cloud wss-cloud-3">
        <Cloud size={130} />
      </div>

      <div className="wss-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="wss-particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="wss-fog" />

      <svg
        className="wss-mountains"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,420 0,240 220,110 430,260 620,150 860,280 1080,120 1260,240 1440,180 1440,420"
          fill="rgba(9,27,58,0.55)"
        />
        <polygon
          points="0,420 0,300 260,200 520,320 760,220 1000,330 1250,230 1440,300 1440,420"
          fill="rgba(6,18,42,0.75)"
        />
      </svg>

      <svg
        className="wss-mountains wss-mountains-reflect"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,420 0,240 220,110 430,260 620,150 860,280 1080,120 1260,240 1440,180 1440,420"
          fill="rgba(9,27,58,0.35)"
        />
      </svg>

      <div className="wss-lake" />
    </div>
  );
}
