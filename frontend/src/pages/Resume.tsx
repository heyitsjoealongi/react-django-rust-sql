// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import PersonalForm from "../components/forms/Personal";
import IntroductionForm from "../components/forms/Introduction";
import SubmitForm from "../components/forms/Submit";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function ResumePage() {
  return (
    <React.Fragment>
      <PersonalForm />
      <IntroductionForm />
      <SubmitForm />
    </React.Fragment>
  );
}
