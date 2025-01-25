// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////
import Layout from "./Layout";

// Components -%- ////
import Personal from "./forms/Personal";
import Introduction from "./forms/Introduction";
import Submit from "./forms/Submit";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Form() {
  return (
    <React.Fragment>
      <Layout>
        <Personal />
        <Introduction />
        <Submit />
      </Layout>
    </React.Fragment>
  );
}
