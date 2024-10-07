import React from 'react';
import './styles.css'; // Link to the custom stylesheet

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">MeetEase</div>
        <nav>
          <ul>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Online Scheduling System for <span>All Services</span></h1>
          <p>
            Manage your meetings, appointments, and schedule with ease. Get reminders, plan your day or week, and stay on top of your commitments.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">Get a Free Account</button>
            <button className="cta-secondary">Get Inspired</button>
          </div>
          <p className="no-credit">No credit card needed</p>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="Dashboard preview" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 MeetEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
