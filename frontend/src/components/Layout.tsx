// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////s

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Layout({ children }: any) {
  return (
    <React.Fragment>
      <article className="block min-w-auto max-w-auto lg:min-w-[39vw] lg:max-w-[39vw] my-9 lg:my-[18vh] mx-9 lg:mx-auto border border-darkoff rounded-xl bg-darkoff border-opacity-[.13] bg-opacity-[.13]">
        {children}
      </article>
    </React.Fragment>
  );
}
