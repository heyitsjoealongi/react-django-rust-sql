// React -%- ////
import * as React from "react";

// Packages -%- ////
import { NavLink } from "react-router";

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
const year = () => {
  const date = new Date();
  if (date) {
    const year = date.getFullYear();
    if (year) {
      return year;
    }
  }
};

// Application -%- ////
export default function Footer() {
  return (
    <React.Fragment>
      <div className="mt-9"></div>
      <footer className="block p-3 mt-auto border-t border-light">
        <section className="flex flex-col min-[2000px]:flex-row flex-nowrap justify-between items-center">
          <NavLink
            to="/"
            target="_self"
            rel="noreferrer noopener"
            aria-label="Home Page Link"
            type="link"
            className="self-center justify-self-start"
          >
            <img
              src="./logo.svg"
              loading="lazy"
              width={30}
              height={30}
              alt="Logo"
              className="mx-auto"
            />
          </NavLink>
          <p className="self-center justify-self-center my-3 min-[2000px]:my-0 text-sm font-normal subpixel-antialiased text-light">
            Copyright © {year()} Bits by the Byte. All rights reserved.
          </p>
          <ul className="self-center justify-self-end flex flex-row flex-nowrap items-center list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <NavLink
                to="/privacy"
                target="_self"
                rel="noreferrer noopener"
                aria-label="Privacy Policy Link"
                type="link"
                className=""
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </section>
      </footer>
    </React.Fragment>
  );
}
