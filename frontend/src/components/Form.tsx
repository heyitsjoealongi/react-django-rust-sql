// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import Personal from "./forms/Personal";
import Introduction from "./forms/Introduction";
import Submit from "./forms/Submit";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Form() {
  return (
    <React.Fragment>
      <article className="block min-w-auto max-w-auto lg:min-w-[30vw] my-9 lg:my-[18vh] mx-9 lg:mx-auto border border-darkoff rounded-xl bg-darkoff border-opacity-[.13] bg-opacity-[.13]">
        <Personal />
        <Introduction />
        <Submit />
      </article>
    </React.Fragment>
  );
}
