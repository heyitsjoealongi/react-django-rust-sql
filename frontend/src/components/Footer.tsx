// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

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
      <footer className="p-3 border-t border-light">
        <section className="flex flex-row flex-nowrap justify-between items-center">
          <a
            href="/"
            target="_self"
            rel="noreferrer noopener"
            aria-label="Community Link"
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
          </a>
          <p className="self-center justify-self-center text-sm font-normal subpixel-antialiased text-light">
            Copyright © {year()} Bits by the Byte. All rights reserved.
          </p>
          <ul className="self-center justify-self-end flex flex-row flex-nowrap items-center list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
              <a
                href="/"
                target="_self"
                rel="noreferrer noopener"
                aria-label="Community Link"
                type="link"
                className=""
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </React.Fragment>
  );
}
