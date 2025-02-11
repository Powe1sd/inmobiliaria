import React from "react";

function ContactModule() {
  return (
    <div className="contact-module">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i> {/* Location Icon */}
          <p>123 Main Street, Anytown, CA 91234</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i> {/* Phone Icon */}
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i> {/* Email Icon */}
          <p>info@example.com</p>
        </div>
        {/* Add more contact info items as needed */}
        <div className="info-item">
          <i className="fab fa-facebook-f"></i>
          <p>
            <a href="#">Facebook</a>
          </p>
        </div>

        <div className="info-item">
          <i className="fab fa-twitter"></i>
          <p>
            <a href="#">Twitter</a>
          </p>
        </div>

        <div className="info-item">
          <i className="fab fa-instagram"></i>
          <p>
            <a href="#">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactModule;
