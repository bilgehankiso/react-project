import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, we believe in bringing nature closer to people. Our mission is to provide 
            the highest quality houseplants and gardening products to help you create a green, vibrant space 
            that enhances your well-being and connects you with nature.
          </p>
        </section>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Founded in 2015, Paradise Nursery has grown to become a trusted name in the plant retail industry. 
            We are a passionate team of plant enthusiasts, horticulturists, and gardening experts dedicated to 
            helping our customers find the perfect plants for their homes and offices. Each plant is carefully 
            selected and nurtured to ensure it arrives at your doorstep in perfect condition.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul className="offerings">
            <li>A diverse collection of houseplants, succulents, and flowering plants</li>
            <li>Expert gardening advice and plant care tips</li>
            <li>Premium quality plants sourced from trusted growers</li>
            <li>Fast and secure shipping to your location</li>
            <li>Customer support and plant care assistance</li>
            <li>Regular product updates and seasonal specials</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Paradise Nursery?</h2>
          <ul className="reasons">
            <li><strong>Quality Assurance</strong> - Every plant is inspected for health and vibrancy</li>
            <li><strong>Expert Knowledge</strong> - Our team provides personalized plant recommendations</li>
            <li><strong>Sustainability</strong> - We practice eco-friendly growing and packaging methods</li>
            <li><strong>Customer Satisfaction</strong> - Your satisfaction is our top priority</li>
            <li><strong>Easy Returns</strong> - Hassle-free return policy for peace of mind</li>
          </ul>
        </section>

        <section className="about-section contact-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need plant care advice? We're here to help!
          </p>
          <p>
            Email: <a href="mailto:info@paradisenursery.com">info@paradisenursery.com</a>
          </p>
          <p>
            Phone: (555) 123-4567
          </p>
          <p>
            Hours: Monday - Friday, 9am - 6pm | Saturday, 10am - 4pm
          </p>
        </section>

        <section className="cta-section">
          <Link to="/products" className="cta-button">
            Start Shopping
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
