import { useCallback } from "react";

import BackgroundScene from "../components/BackgroundScene";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Statistics from "../components/Statistics";
import Preview from "../components/Preview";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import useScrollProgress from "../hooks/useScrollProgress";
console.log("Home rendered");
function Home() {
  const progress = useScrollProgress();

  const handleSignIn = useCallback(() => {
    window.location.href = "/login";
  }, []);

  return (
    <div className="ws-root">
      <BackgroundScene progress={progress} />

      <div className="ws-content">
        <Navbar onSignIn={handleSignIn} />
        <Hero onSignIn={handleSignIn} />
        <Features />
        <HowItWorks />
        <Statistics />
        <Preview />
        <CTA onSignIn={handleSignIn} />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
