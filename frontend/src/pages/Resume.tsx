// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// Components -%- ////
import Branding from "../components/branding/Branding";
import PersonalForm from "../components/forms/Personal";
import IntroductionForm from "../components/forms/Introduction";
import SubmitForm from "../components/forms/Submit";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function ResumePage() {
  return (
    <React.Fragment>
      <Branding />
      <PersonalForm />
      <IntroductionForm />
      <SubmitForm />
    </React.Fragment>
  );
}
