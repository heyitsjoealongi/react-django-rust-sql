// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////

// System Components -%- ////
import Layout from "./Layout";

// Components -%- ////

// Middleware & Integrations -%- ////
const handleClick = () => {
  console.log("clicked");
};

// Application -%- ////
export default function Header() {
  return (
    <React.Fragment>
      <Layout>
        <section className="block h-auto w-full">
          <div className="flex flex-col flex-nowrap justify-center p-9 mx-auto">
            <div className="flex flex-row flex-nowrap my-3 lg:my-6">
              <div className="inline-block h-fit w-fit mr-3 lg:mr-3 border border-light bg-dark">
                <img
                  src="./logo.svg"
                  loading="lazy"
                  width={60}
                  height={60}
                  alt="Logo"
                  className="self-center justify-self-start p-1 m-1"
                />
              </div>
              <span className="inline-block h-fit w-fit self-center justify-self-end uppercase text-3xl lg:text-3xl font-slab font-medium subpixel-antialiased text-light">
                Bits by <br className="lg:hidden" /> the Byte
              </span>
            </div>
            <h1 className="self-center justify-self-center my-6 lg:my-9 mx-auto text-6xl lg:text-9xl font-roboto font-black subpixel-antialiased text-bright">
              The Cyberspace Doghouse
            </h1>
            <p className="self-center justify-self-center my-3 lg:my-6 mx-auto text-3xl lg:text-6xl font-extralight subpixel-antialiased text-light">
              Everything you need to build a cybersecurity posture
            </p>
            <button
              type="submit"
              className="block w-full p-3 mt-6 lg:mt-9 mx-auto font-slab uppercase text-xl lg:text-2xl font-bold subpixel-antialiased text-darkoff border border-light rounded bg-light hover:text-light hover:bg-darkoff hover:border-light active:text-light active:bg-darkoff active:border-light"
              onClick={() => handleClick}
            >
              Create Your Account
            </button>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
}
