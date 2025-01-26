// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Middleware & Integrations -%- ////
// import { token } from "./redux/slices/authSlice";
import { supabase } from "./supabase/supabase";

// Application -%- ////
function App({ children }: any) {
  React.useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      if (event === "INITIAL_SESSION") {
        // handle initial session
      } else if (event === "SIGNED_IN") {
        // handle sign in event
      } else if (event === "SIGNED_OUT") {
        // handle sign out event
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        // handle user updated event
      }
    });

    // call unsubscribe to remove the callback
    data.subscription.unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <main className="flex flex-col h-auto min-h-screen w-full">
        <Navbar />
        <article className="block min-w-auto max-w-auto min-w-[90vw] max-w-[90vw] min-[1000px]:min-w-[69vw] min-[1000px]:max-w-[69vw] min-[2000px]:min-w-[39vw] min-[2000px]:max-w-[39vw] my-9 mx-auto border border-darkoff rounded-xl bg-darkoff border-opacity-[.13] bg-opacity-[.13]">
          {children}
        </article>
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
