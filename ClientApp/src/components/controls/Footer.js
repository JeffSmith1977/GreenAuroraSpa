import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>Green Aura Spa</h3>
          {/* <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p> */}
          <div className="social-links">
            <a href="https://twitter.com/greenauraspa" className="twitter">
              <i className="bx bxl-twitter"></i>  
            </a>
            <a
              href="https://www.facebook.com/greenauraspa"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/greenauraspa/"
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Green Aura Spa</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>      

    </div>
  );
}
