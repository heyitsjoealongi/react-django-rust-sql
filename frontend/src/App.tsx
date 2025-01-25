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
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

// Middleware & Integrations -%- ////

// Application -%- ////
function App() {
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
        <Header />
        {/* <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div> */}
        <Form />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
