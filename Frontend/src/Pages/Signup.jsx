import "./signup.css";

import SignupBackgroundScene from "../components/SignupBackgroundScene";
import LoginNavbar from "../components/LoginNavbar";
import SignupCard from "../components/SignupCard";

export default function SignupPage() {
  return (
    <div className="wss-root">
      <SignupBackgroundScene />

      <div className="wss-content">
        <LoginNavbar />

        <main className="wss-split">
          <div className="wss-card-wrap">
            <SignupCard />
          </div>
        </main>
      </div>
    </div>
  );
}
