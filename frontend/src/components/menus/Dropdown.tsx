// React -%- ////
import * as React from "react";

// Packages -%- ////
import { NavLink } from "react-router";

// Types -%- ////
type DropdownProps = {
  id: number;
  category: string;
  dropdown: {
    id: number;
    title: string;
    description: string;
    href: string;
    target: string;
  }[];
};

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Dropdown({
  id,
  category,
  dropdown,
}: Readonly<DropdownProps>) {
  const [open, toggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (event.target?.id !== `${"dropdown" + id}`) {
        toggle(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [id, open]);

  return (
    <React.Fragment>
      <div className="relative">
        <button
          id={`${"dropdown" + id}`}
          className="flex flex-row flex-nowrap justify-center items-center py-1 px-3 mx-auto border text-primary border border-light rounded hover:bg-dark hover:bg-opacity-10 hover:border hover:border-primary hover:border-opacity-10 active:bg-dark active:bg-opacity-10 active:border active:border-primary active:border-opacity-10"
          onClick={() => toggle(!open)}
        >
          <div className="pr-1 mx-auto self-center text-base font-slab font-medium subpixel-antialiased">
            {category}
          </div>
          {open === true ? (
            <div className="mx-auto self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          ) : (
            <div className="mx-auto self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          )}
        </button>
        {open === true ? (
          <div className="absolute block w-60 mt-1 p-1 bg-light border border-primary rounded">
            <ul className="block w-auto flex flex-col flex-wrap mx-auto list-none">
              {dropdown?.map(({ id, title, description, href, target }) => (
                <li
                  className="text-primary border border-light rounded hover:bg-dark hover:bg-opacity-10 hover:border hover:border-primary hover:border-opacity-10 active:bg-dark active:bg-opacity-10 active:border active:border-primary active:border-opacity-10"
                  key={id}
                >
                  <NavLink
                    to={href}
                    target={target}
                    rel="noreferrer noopener"
                    aria-label="Navbar Link"
                    type="link"
                    className="block p-3 mx-auto"
                  >
                    <span className="block text-base font-roboto font-medium subpixel-antialiased">
                      {title}
                    </span>
                    <span className="block text-sm font-roboto font-accent subpixel-antialiased">
                      {description}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </React.Fragment>
  );
}
