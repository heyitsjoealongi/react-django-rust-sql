// React -%- ////
import * as React from "react";

// Packages -%- ////
import { NavLink } from "react-router";

// Types -%- ////

// Components -%- ////
import Dropdown from "./menus/Dropdown";
import Slidedown from "./menus/Slidedown";

// Middleware & Integrations -%- ////
const links = [
  {
    id: 0,
    category: "Social",
    href: "https://bitsbythebyte.com/",
    target: "_self",
    dropdown: [
      {
        id: 0,
        title: "X",
        description: "Follow on X for the latest trends in secure computing",
        href: "https://x.com/availednetwork/",
        target: "_blank",
      },
      {
        id: 1,
        title: "Bluesky",
        description: "Follow on X for the latest trends in secure computing",
        href: "https://bsky.app/profile/availed.network/",
        target: "_blank",
      },
    ],
  },
  {
    id: 1,
    category: "Network",
    href: "https://availed.network/",
    target: "_self",
    dropdown: [],
  },
];

// Application -%- ////
export default function Navbar() {
  const [open, toggle] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <header className="block p-3 border-b border-primary">
        <section className="flex flex-row flex-nowrap justify-between items-center">
          <NavLink
            to="/"
            target="_self"
            rel="noreferrer noopener"
            aria-label="Home Page Link"
            type="link"
            className="self-center justify-self-start"
          >
            <img
              src="./logo.svg"
              loading="lazy"
              width={30}
              height={30}
              alt="Logo"
              className="mx-auto"
            />
          </NavLink>
          <ul className="hidden self-center justify-self-center min-[2000px]:flex flex-row flex-nowrap space-x-4 list-none">
            {links?.map(({ id, category, href, target, dropdown }) => (
              <li
                className="mx-0.5 text-sm font-normal subpixel-antialiased"
                key={id}
              >
                {dropdown?.length > 0 ? (
                  <Dropdown id={id} category={category} dropdown={dropdown} />
                ) : (
                  <a
                    href={href}
                    target={target}
                    rel="noreferrer noopener"
                    aria-label="Articles Link"
                    type="link"
                    className="flex flex-row flex-nowrap justify-center items-center py-1 px-3 text-base font-slab font-medium subpixel-antialiased text-primary border border-light rounded hover:bg-dark hover:bg-opacity-10 hover:border hover:border-primary hover:border-opacity-10 active:bg-dark active:bg-opacity-10 active:border active:border-primary active:border-opacity-10"
                  >
                    {category}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <ul className="hidden self-center justify-self-end min-[2000px]:flex flex-row flex-nowrap space-x-4 list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </li>
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </li>
          </ul>
          <button
            className="min-[2000px]:hidden self-center justify-self-end flex flex-row flex-nowrap space-x-4 list-none cursor-pointer"
            onClick={() => toggle(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 self-center justify-self-start"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <p className="hidden">Mobile Menu</p>
          </button>
        </section>
      </header>
      {open === true ? (
        <section className="min-[2000px]:hidden block w-full p-3 bg-light border border-light">
          <ul className="flex flex-col flex-nowrap p-1 list-none">
            {links?.map(({ id, category, href, target, dropdown }) => (
              <li
                className="my-0.5 text-sm font-normal subpixel-antialiased text-primary"
                key={id}
              >
                {dropdown?.length > 0 ? (
                  <Slidedown id={id} category={category} dropdown={dropdown} />
                ) : (
                  <a
                    href={href}
                    target={target}
                    rel="noreferrer noopener"
                    aria-label="Articles Link"
                    type="link"
                    className="block p-1 mx-auto text-base font-slab font-medium subpixel-antialiased text-primary border border-light rounded hover:bg-dark hover:bg-opacity-10 hover:border hover:border-primary hover:border-opacity-10 active:bg-dark active:bg-opacity-10 active:border active:border-primary active:border-opacity-10"
                  >
                    {category}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <></>
      )}
      <div className="mt-9"></div>
    </React.Fragment>
  );
}
