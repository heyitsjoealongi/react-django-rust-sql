// React -%- ////
import * as React from "react";

// Packages -%- ////
// import { useNavigate } from "react-router-dom";

// Types -%- ////
// import { AppMenusT, AppMenuT } from "../../types/menu";

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function Navbar() {
  return (
    <React.Fragment>
      <header>
        <section className="overflow-hidden flex flex-row flex-nowrap mx-auto m-2">
          <img
            src="./logo.svg"
            loading="lazy"
            width={50}
            height={50}
            alt="Logo"
            className="mx-auto"
          />
          {/* <ul className="justify-end list-none">
            <li className="mx-auto">Example</li>
            <li className="mx-auto">Example</li>
            <li className="mx-auto">Example</li>
          </ul> */}
        </section>
      </header>
    </React.Fragment>
  );
}
