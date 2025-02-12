// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// Components -%- ////
import Branding from "./branding/Branding";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Header() {
  return (
    <React.Fragment>
      <section className="block h-auto w-full">
        <div className="flex flex-col flex-nowrap justify-center mx-auto">
          <Branding />
          <h1 className="my-3 min-[2000px]:my-6 text-6xl min-[2000px]:text-9xl font-roboto font-black subpixel-antialiased text-bright">
            the new frontier
          </h1>
          <p className="my-3 min-[2000px]:my-6 text-3xl min-[2000px]:text-6xl font-extralight subpixel-antialiased text-light">
            explore with confidence, on the availed network.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
