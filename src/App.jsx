import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Payment from "./components/Payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img src={viteLogo} className="hero-logo" alt="Vite logo" />
            <img src={reactLogo} className="hero-logo" alt="React logo" />
          </div>
          <h1 className="hero-title">PayFlow Demo</h1>
          <p className="hero-subtitle">
            Experience seamless payment processing with modern React components
            <br />
            and beautiful UI design
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <h2 className="features-title">Modern Payment Solutions</h2>
          <p className="features-subtitle">
            Built with React and Vite for lightning-fast performance. Secure,
            responsive, and user-
            <br />
            friendly payment forms that adapt to any device.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon secure-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="feature-title">Secure Processing</h3>
              <p className="feature-description">
                End-to-end encryption ensures your payment data is always
                protected and secure.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon lightning-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Powered by Vite and React for instant load times and smooth
                interactions.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon mobile-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3 className="feature-title">Mobile Ready</h3>
              <p className="feature-description">
                Fully responsive design that works perfectly on all devices and
                screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <div className="demo-content">
          <h2 className="demo-title">Interactive Demo</h2>
          <button
            className="counter-button"
            onClick={() => setCount((count) => count + 1)}
          >
            ✓ Click Counter: {count}
          </button>
          <p className="demo-subtitle">
            Edit <code>src/App.jsx</code> and save to test HMR (Hot Module
            Replacement)
          </p>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="payment-section">
        <div className="payment-content">
          <h2 className="payment-title">Try Our Payment Form</h2>
          <p className="payment-subtitle">
            Experience our beautifully designed payment form with real-time
            validation, secure
            <br />
            input handling, and smooth animations.
          </p>
          <Payment />
          <div className="payment-footer">
            <p className="footer-note">
              ✓ This is a demo form • No real payment will be processed
            </p>
            <div className="footer-badges">
              <span className="badge">🔒 Secure & Encrypted</span>
              <span className="badge">⚡ Blazing Fast</span>
              <span className="badge">✓ Responsive Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>PayFlow Demo</h4>
            <p>
              A modern payment form built with React, Vite, and Tailwind CSS.
              Showcasing best practices in UI/UX design.
            </p>
          </div>
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>⚛️ React 19</li>
              <li>⚡ Vite</li>
              <li>🎨 Tailwind CSS</li>
              <li>📦 Modern JavaScript</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Learn More</h4>
            <ul>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Docs
                </a>
              </li>
              <li>
                <a
                  href="https://vite.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Built with ❤️ using modern web technologies</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
