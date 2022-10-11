import React from "react";
import "../myStyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer ">
        <div className="footer-content">
            <h4>FED Blog</h4>
            <p>Page Credits : KURIVELLA SAI SRI VIDYA ~20BQ1A05B7</p>
            <p>copyright &copy; {new Date().getFullYear()} <a href=""> FED Blog</a>  </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
