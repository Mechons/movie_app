import React from "react";
import "./Footer.scss";

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className="footer">
      <div>Movie App</div>
      <div>{date}, Movie, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;