import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Cloud,
  CloudSun,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Wind,
  Droplets,
  Sun,
  Globe,
  Laptop,
  Apple,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";
import "./Login.css";
import LoginNavbar from "../components/LoginNavbar";
import LoginCard from "../components/LoginCard";


/* ================================ BACKGROUND SCENE ================================ */
function BackgroundScene() {
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      left: (i * 53) % 100,
      delay: i * 0.6,
      duration: 9 + (i % 5),
    })),
  ).current;

  return (
    <div className="wsl-bg" aria-hidden="true">
      <div className="wsl-aurora wsl-aurora-1" />
      <div className="wsl-aurora wsl-aurora-2" />
      <div className="wsl-rays" />

      <div className="wsl-cloud wsl-cloud-1">
        <Cloud size={110} />
      </div>
      <div className="wsl-cloud wsl-cloud-2">
        <Cloud size={70} />
      </div>
      <div className="wsl-cloud wsl-cloud-3">
        <Cloud size={130} />
      </div>

      <div className="wsl-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="wsl-particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="wsl-fog" />

      <svg
        className="wsl-mountains"
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
        className="wsl-mountains wsl-mountains-reflect"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,420 0,240 220,110 430,260 620,150 860,280 1080,120 1260,240 1440,180 1440,420"
          fill="rgba(9,27,58,0.35)"
        />
      </svg>
      <div className="wsl-lake" />
    </div>
  );
}

export default function LoginPage() {

  return (
    <div className="wsl-root">
      <BackgroundScene />
      <div className="wsl-content">
        <LoginNavbar />
        <main className="wsl-center">
          <LoginCard />
        </main>
      </div>
    </div>
  );
}
