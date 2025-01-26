// React -%- ////
import * as React from "react";
// import { supabase } from "./supabaseClient";
// import Auth from "./Auth";
// import Account from "./Account";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////

// Components -%- ////
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Middleware & Integrations -%- ////

// Application -%- ////
function App({ children }: any) {
  // const [session, setSession] = React.useState<any>(null);

  // React.useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }: any) => {
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event: any, session: any) => {
  //     setSession(session);
  //   });
  // }, []);

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
