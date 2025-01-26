// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useNavigate } from "react-router";

// Types -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/account");
  };

  return (
    <React.Fragment>
      <section className="block h-auto w-full">
        <div className="flex flex-col flex-nowrap justify-center p-9 mx-auto">
          <div className="flex flex-row flex-nowrap my-3 min-[2000px]:my-6">
            <div className="inline-block h-fit w-fit mr-3 min-[2000px]:mr-3 border border-light bg-dark">
              <img
                src="./logo.svg"
                loading="lazy"
                width={60}
                height={60}
                alt="Logo"
                className="self-center p-1 m-1"
              />
            </div>
            <span className="inline-block h-fit w-fit self-center uppercase text-3xl min-[2000px]:text-3xl font-slab font-medium subpixel-antialiased text-light">
              Bits by <br className="min-[2000px]:hidden" /> the Byte
            </span>
          </div>
          <h1 className="my-6 min-[2000px]:my-9 text-6xl min-[2000px]:text-9xl font-roboto font-black subpixel-antialiased text-bright">
            The Cyberspace Doghouse
          </h1>
          <p className="my-3 min-[2000px]:my-6 text-3xl min-[2000px]:text-6xl font-extralight subpixel-antialiased text-light">
            Everything you need to build a cybersecurity posture
          </p>
          <button
            type="submit"
            className="block w-full p-3 mt-6 min-[2000px]:mt-9 mx-auto font-slab uppercase text-xl min-[2000px]:text-2xl font-bold subpixel-antialiased text-darkoff border border-light rounded bg-light hover:text-light hover:bg-darkoff hover:border-light active:text-light active:bg-darkoff active:border-light"
            onClick={() => handleClick}
          >
            Create Your Account
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}
