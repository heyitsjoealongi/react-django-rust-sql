// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import Personal from "../components/forms/Personal";
import Introduction from "../components/forms/Introduction";
import Submit from "../components/forms/Submit";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function ResumePage() {
  return (
    <React.Fragment>
      <Personal />
      <Introduction />
      <Submit />
    </React.Fragment>
  );
}
