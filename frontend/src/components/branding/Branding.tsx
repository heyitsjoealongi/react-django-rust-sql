// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Branding() {
  return (
    <React.Fragment>
      <section className="block h-auto w-full">
        <div className="flex flex-row flex-nowrap mb-3 min-[2000px]:mb-6">
          <div className="inline-block h-fit w-fit mr-3 min-[2000px]:mr-3 border border-light bg-dark">
            <img
              src="./logo.svg"
              loading="lazy"
              width={60}
              height={60}
              alt="Logo"
              className="self-center p-1 m-1"
            />
          </div>
          <span className="inline-block h-fit w-fit self-center lowercase text-3xl min-[2000px]:text-3xl font-slab font-medium subpixel-antialiased text-light">
            availed <br className="min-[2000px]:hidden" /> network
          </span>
        </div>
      </section>
    </React.Fragment>
  );
}
