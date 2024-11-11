import React from "react";
import { FaShieldAlt, FaCloud, FaRobot } from "react-icons/fa";

import cloud from "../assets/images/cloud.jpg"
import cyber from "../assets/images/cyber.jpg"
function Services() {
  return (
    <section className="services" id="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src={cyber} // Replace with actual image
              className="card-img-top"
              alt="AI-driven VAPT"
            />
            <div className="card-body">
              <FaShieldAlt size={40} />
              <h3 className="card-title mt-2">AI-driven VAPT</h3>
              <p className="card-text">
                Protecting your assets with advanced penetration testing powered by AI.
              </p>
              <a href="#!" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={cloud}
              className="card-img-top"
              alt="Cloud Security"
            />
            <div className="card-body">
              <FaCloud size={40} />
              <h3 className="card-title mt-2">Cloud Security</h3>
              <p className="card-text">
                Secure your cloud environment against modern threats.
              </p>
              <a href="#!" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={cyber}
              className="card-img-top"
              alt="Cyber Intelligence"
            />
            <div className="card-body">
              <FaRobot size={40} />
              <h3 className="card-title mt-2">Cyber Intelligence</h3>
              <p className="card-text">
                Stay ahead with our intelligence-driven cybersecurity solutions.
              </p>
              <a href="#!" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
