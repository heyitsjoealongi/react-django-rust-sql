// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useNavigate } from "react-router";

// Types -%- ////

// Components -%- ////
import SignupForm from "../components/forms/Signup";
import SubmitForm from "../components/forms/Submit";

// Middleware & Integrations -%- ////
import { supabase } from "../supabase/supabase";

// Application -%- ////
export default function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = async (form: any) => {
    try {
      const signup = await supabase.auth.signUp({
        email: form?.signup?.email,
        password: form?.signup?.password,
      });

      if (signup?.data?.user?.aud === "authenticated") {
        navigate("/logon");
        console.log("// Signup successful -%- ////");
      }
    } catch (error: any) {
      console.log(
        "Signup error (caught)",
        error?.error_description || error?.message
      );
    }
  };

  return (
    <React.Fragment>
      <SignupForm />
      <SubmitForm handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}
