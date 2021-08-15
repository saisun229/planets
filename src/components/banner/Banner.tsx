import React from "react";
import "./Banner.css";

/**
 * Sets up the Nav Banner for the page
 *
 * @returns {JSX.Element} Banner Component
 */
export default function Banner(): JSX.Element {
  return (
    <section className="banner">
      <img
        src="https://assets.website-files.com/5bd30a7057f745d0c688837d/5bdd12bdf9587a5280377557_logo_enzyme_white.png"
        alt="Enzyme logo in white"
        className="logo"
      ></img>
    </section>
  );
}
