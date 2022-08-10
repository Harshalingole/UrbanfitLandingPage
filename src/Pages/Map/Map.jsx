import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7565.309412761569!2d73.91145!3d18.5444995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c172f26df47d%3A0x8d508903a17ab0c1!2sUrbanFit%20Wellness%20Private%20Limited!5e0!3m2!1sen!2sin!4v1660046529478!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="UrbanFit Location"
      ></iframe>
    </div>
  );
};

export default Map;
