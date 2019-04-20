import React from "react";
import Link from "gatsby-link";

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
        &copy;{" "}
      <a
        href="https://www.futurefox.co.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        Future Fox
      </a>{" "}
      2019
    </p>
  </div>
);

export default MainFooter;
