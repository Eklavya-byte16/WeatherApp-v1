import { useRef } from "react";
import { Cloud } from "lucide-react";

const hexToRgb = (hex) => {
  const v = hex.replace("#", "");
  const n = parseInt(v, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const lerp = (a, b, t) => a + (b - a) * t;

const mixHex = (h1, h2, t) => {
  const a = hexToRgb(h1);
  const b = hexToRgb(h2);
  const r = Math.round(lerp(a[0], b[0], t));
  const g = Math.round(lerp(a[1], b[1], t));
  const bl = Math.round(lerp(a[2], b[2], t));
  return `rgb(${r}, ${g}, ${bl})`;
};

const SKY_STOPS = [
  { t: 0, top: "#FFE3B8", mid: "#88D8FF", bot: "#5EA9FF" },
  { t: 0.5, top: "#7FC3FF", mid: "#4A8FE0", bot: "#1B3F7A" },
  { t: 1, top: "#132A56", mid: "#0C1B3D", bot: "#050A1A" },
];

function skyGradient(t) {
  t = Math.max(0, Math.min(1, t));

  let a = SKY_STOPS[0];
  let b = SKY_STOPS[1];

  if (t > 0.5) {
    a = SKY_STOPS[1];
    b = SKY_STOPS[2];
  }

  const localT = (t - a.t) / (b.t - a.t || 1);

  const top = mixHex(a.top, b.top, localT);
  const mid = mixHex(a.mid, b.mid, localT);
  const bot = mixHex(a.bot, b.bot, localT);

  return `linear-gradient(180deg, ${top} 0%, ${mid} 45%, ${bot} 100%)`;
}

function BackgroundScene({ progress }) {
  const starOpacity = Math.max(0, (progress - 0.55) / 0.35);
  const sunOpacity = Math.max(0, 1 - progress / 0.4);
  const hazeShift = progress * -40;

  const stars = useRef(
    Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 60,
      s: Math.random() * 1.6 + 0.4,
      d: Math.random() * 3 + 2,
    })),
  ).current;

  return (
    <div
      className="ws-bg"
      style={{ background: skyGradient(progress) }}
      aria-hidden="true"
    >
      {/* stars */}
      <div className="ws-stars" style={{ opacity: starOpacity }}>
        {stars.map((s, i) => (
          <span
            key={i}
            className="ws-star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              animationDuration: `${s.d}s`,
            }}
          />
        ))}
      </div>

      {/* sun + rays */}
      <div className="ws-sun" style={{ opacity: sunOpacity }}>
        <div className="ws-sun-core" />
        <div className="ws-sun-rays" />
      </div>

      {/* drifting clouds */}
      <div className="ws-cloud ws-cloud-1">
        <Cloud size={92} />
      </div>
      <div className="ws-cloud ws-cloud-2">
        <Cloud size={64} />
      </div>
      <div className="ws-cloud ws-cloud-3">
        <Cloud size={120} />
      </div>
      <div className="ws-cloud ws-cloud-4">
        <Cloud size={54} />
      </div>

      {/* slow particles */}
      <div className="ws-particles">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="ws-particle"
            style={{
              left: `${(i * 43) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${10 + (i % 6)}s`,
            }}
          />
        ))}
      </div>

      {/* mountains + lake, parallax with scroll */}
      <svg
        className="ws-mountains"
        style={{ transform: `translateY(${hazeShift}px)` }}
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,420 0,240 220,110 430,260 620,150 860,280 1080,120 1260,240 1440,180 1440,420"
          fill="rgba(8,20,46,0.55)"
        />
        <polygon
          points="0,420 0,300 260,200 520,320 760,220 1000,330 1250,230 1440,300 1440,420"
          fill="rgba(6,15,36,0.75)"
        />
        <rect
          x="0"
          y="360"
          width="1440"
          height="60"
          fill="rgba(255,255,255,0.05)"
        />
      </svg>
    </div>
  );
}

export default BackgroundScene;
