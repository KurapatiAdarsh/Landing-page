import React from "react";

function GlobalPresence() {
  return (
    <section className="global-presence" id="presence">
      <h2 className="text-center mb-4">Our Global Presence</h2>
      <p className="text-center mb-4">
        We serve clients across the world with offices in multiple regions.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.47787204565!2d78.07836299470652!3d17.41273323120619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1731239396962!5m2!1sen!2sin"
            width="100%" // Adjusted width to 100% for responsiveness
            height="300" // Adjusted height to make it look better
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map 1"
          ></iframe>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510630717!2d76.7635559895021!3d28.64428734582233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1731239522208!5m2!1sen!2sin"
            width="100%" // Adjusted width to 100% for responsiveness
            height="300" // Adjusted height to make it look better
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map 2"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
