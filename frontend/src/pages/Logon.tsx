// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useNavigate } from "react-router";

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import LogonForm from "../components/forms/Logon";
import SubmitForm from "../components/forms/Submit";

// Middleware & Integrations -%- ////
import { supabase } from "../supabase/supabase";

// Application -%- ////
export default function LogonPage() {
  const navigate = useNavigate();

  const handleSubmit = async (form: any) => {
    try {
      const logon = await supabase.auth.signInWithPassword({
        email: form?.logon?.email,
        password: form?.logon?.password,
      });

      if (logon?.data?.session?.access_token !== null) {
        navigate("/account");
        console.log("// Logon successful -%- ////");
      }
    } catch (error: any) {
      console.log(
        "Logon error (caught)",
        error?.error_description || error?.message
      );
    }
  };

  return (
    <React.Fragment>
      <LogonForm />
      <SubmitForm handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}
