import "./App.css";
import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";

function App() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div>
    </>
  );
}

export default App;
