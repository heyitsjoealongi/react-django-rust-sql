import * as React from "react";
// import { supabase } from "./supabaseClient";
// import Auth from "./Auth";
// import Account from "./Account";

import Navbar from "./components/Navbar";

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
      <main>
        <Navbar />
        {/* <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div> */}
      </main>
    </React.Fragment>
  );
}

export default App;
