import React from "react";
import aboutImage from "../assets/images/about.png"; 


function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <h2 className="text-center">About Us</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 col-md-6">
            <p className="paga">
            VRV Security Cum Man Power Agency is one of the leading Security Services providers in Chennai. We have a team of professionally well trained and managed manpower with all the foremost recent and propelled security instruments. Our services mainly incorporate Security Guards, Security Guards for Corporate Offices, Apartments,  Hotel, Restaurant  Security Services, Industrial Security Services,ATM and Banks, Super Markets, Shops,  Hospital . Go down Security Services.
            </p>
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <img
              src={aboutImage}
              alt="Cybersecurity"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
