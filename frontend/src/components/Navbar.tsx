// React -%- ////
import * as React from "react";

// Packages -%- ////

// Types -%- ////
// type DropdownProps = {
//   id: number;
//   category: string;
//   href: string;
//   target: string;
//   dropdown: {
//     id: number;
//     title: string;
//     description: string;
//     href: string;
//     target: string;
//   }[];
// };

// System Components -%- ////

// Components -%- ////
import Dropdown from "./items/Dropdown";
import Slidedown from "./items/Slidedown";

// Middleware & Integrations -%- ////
const links = [
  {
    id: 0,
    category: "Tools",
    href: "https://bitsbythebyte.com/",
    target: "_self",
    dropdown: [
      {
        id: 0,
        title: "Resume",
        description: "Create a digitally customizable resume",
        href: "/",
        target: "_self",
      },
    ],
  },
  {
    id: 1,
    category: "Social",
    href: "https://bitsbythebyte.com/",
    target: "_self",
    dropdown: [
      {
        id: 0,
        title: "Substack",
        description: "Subscribe on Substack for the latest articles",
        href: "https://bitsbythebyte.pub/",
        target: "_blank",
      },
      {
        id: 2,
        title: "Bluesky",
        description: "Follow on Bluesky for the latest posts",
        href: "https://bsky.app/profile/bitsbythebyte.pub",
        target: "_blank",
      },
    ],
  },
  {
    id: 1,
    category: "Articles",
    href: "https://bitsbythebyte.pub/",
    target: "_self",
    dropdown: [],
  },
];
const tools = {
  id: 0,
  category: "Tools",
  dropdown: [
    {
      id: 0,
      title: "Resume",
      description: "Create a digital resume",
      href: "/",
      target: "_self",
    },
  ],
};
const social = {
  id: 1,
  category: "Social",
  dropdown: [
    {
      id: 0,
      title: "Substack",
      description: "Subscribe to the publication",
      href: "https://bitsbythebyte.pub/",
      target: "_blank",
    },
    {
      id: 2,
      title: "X",
      description: "Follow on X for the latest posts",
      href: "https://x.com/bitsbythebyte",
      target: "_blank",
    },
    {
      id: 2,
      title: "Discord",
      description: "Join the community and chat",
      href: "https://discord.gg/J8dkx7jKem",
      target: "_blank",
    },
  ],
};

// Application -%- ////
export default function Navbar() {
  const [open, toggle] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <header className="block p-3 border-b border-light">
        <section className="flex flex-row flex-nowrap justify-between items-center">
          <a
            href="/"
            target="_self"
            rel="noreferrer noopener"
            aria-label="Community Link"
            type="link"
            className="self-center justify-self-start"
          >
            <img
              src="./logo.svg"
              loading="lazy"
              width={30}
              height={30}
              alt="Logo"
              className=""
            />
          </a>
          <ul className="hidden self-center justify-self-center lg:flex flex-row flex-nowrap space-x-4 list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-bright">
              <Dropdown
                id={tools?.id}
                category={tools?.category}
                dropdown={tools?.dropdown}
              />
            </li>
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-bright">
              <Dropdown
                id={social?.id}
                category={social?.category}
                dropdown={social?.dropdown}
              />
            </li>
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-bright">
              <a
                href="https://bitsbythebyte.pub/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Articles Link"
                type="link"
                className="flex flex-row flex-nowrap justify-center items-center py-1 px-3 mx-auto text-base font-slab font-medium subpixel-antialiased text-bright border border-dark rounded hover:bg-darkoff hover:border hover:border-light hover:rounded active:bg-darkoff active:border active:border-light active:rounded"
              >
                Articles
              </a>
            </li>
          </ul>
          <ul className="hidden self-center justify-self-end lg:flex flex-row flex-nowrap space-x-4 list-none">
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
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
            <li className="mx-auto text-sm font-normal subpixel-antialiased text-light">
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
            className="lg:hidden self-center justify-self-end flex flex-row flex-nowrap space-x-4 list-none"
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
        <section className="lg:hidden block w-full p-3 bg-dark border border-light">
          <ul className="flex flex-col flex-nowrap p-1 list-none">
            {links?.map(({ id, category, href, target, dropdown }) => (
              <li
                className="text-sm font-normal subpixel-antialiased text-bright"
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
                    className="block p-1 mx-auto text-base font-slab font-medium subpixel-antialiased text-bright border border-dark rounded hover:bg-darkoff hover:border hover:border-light hover:rounded active:bg-darkoff active:border active:border-light active:rounded"
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
    </React.Fragment>
  );
}
