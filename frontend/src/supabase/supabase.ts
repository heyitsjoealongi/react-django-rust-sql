// React -%- ////

// Packages -%- ////

// Types -%- ////s

// Components -%- ////
import { createClient } from "@supabase/supabase-js";

// Middleware & Integrations -%- ////

// Application -%- ////
export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL ? process.env.REACT_APP_SUPABASE_URL : "",
  process.env.REACT_APP_SUPABASE_ANON_KEY
    ? process.env.REACT_APP_SUPABASE_ANON_KEY
    : ""
);
