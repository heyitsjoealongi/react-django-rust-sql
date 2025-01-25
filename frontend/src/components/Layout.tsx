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
      <article className="block min-w-auto max-w-auto min-w-[90vw] max-w-[90vw] min-[1000px]:min-w-[69vw] min-[1000px]:max-w-[69vw] min-[2000px]:min-w-[39vw] min-[2000px]:max-w-[39vw] my-9 mx-auto border border-darkoff rounded-xl bg-darkoff border-opacity-[.13] bg-opacity-[.13]">
        {children}
      </article>
    </React.Fragment>
  );
}
