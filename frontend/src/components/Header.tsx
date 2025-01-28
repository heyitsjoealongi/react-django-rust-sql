// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useNavigate } from "react-router";

// Types -%- ////

// Components -%- ////
import Branding from "./branding/Branding";

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Header() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section className="block h-auto w-full">
        <div className="flex flex-col flex-nowrap justify-center mx-auto">
          <Branding />
          <h1 className="my-3 min-[2000px]:my-6 text-6xl min-[2000px]:text-9xl font-roboto font-black subpixel-antialiased text-bright">
            The Cyberspace Doghouse
          </h1>
          <p className="my-3 min-[2000px]:my-6 text-3xl min-[2000px]:text-6xl font-extralight subpixel-antialiased text-light">
            Everything you need to build a cybersecurity posture
          </p>
          <div className="flex flex-row flex-nowrap">
            <button
              type="submit"
              className="inline-block w-full p-3 mt-6 mr-3 mx-auto font-slab uppercase text-xl min-[2000px]:text-2xl font-bold subpixel-antialiased text-border-light border border-light rounded bg-darkoff hover:text-darkoff hover:bg-light hover:border-light active:text-light active:bg-darkoff active:border-light"
              onClick={() => navigate("/logon")}
            >
              Logon
            </button>
            <button
              type="submit"
              className="inline-block w-full p-3 mt-6 ml-3 mx-auto font-slab uppercase text-xl min-[2000px]:text-2xl font-bold subpixel-antialiased text-darkoff border border-light rounded bg-light hover:text-light hover:bg-darkoff hover:border-light active:text-light active:bg-darkoff active:border-light"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
