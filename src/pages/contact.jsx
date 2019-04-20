import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaTwitter, FaInstagram } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact me" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="futurefoxin@hotmail.com" />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            // href="https://twitter.com/the-future-fox"
            href="#"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            coming soon
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaInstagram />
          <a
            // href="https://instagram.com/the-future-fox"
            href="#"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            coming soon
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
