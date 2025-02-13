// React -%- ////
import * as React from "react";

// Packages -%- ////
import { NavLink } from "react-router";

// Types -%- ////
type SlidedownProps = {
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
}: Readonly<SlidedownProps>) {
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
      <div className="relative block w-full">
        <button
          id={`${"dropdown" + id}`}
          className="flex flex-row flex-nowrap justify-center items-center w-full p-1 border border-primary rounded hover:text-light hover:bg-dark hover:border hover:border-dark hover:rounded active:text-light active:bg-dark active:border active:border-dark active:rounded"
          onClick={() => toggle(!open)}
        >
          <div className="pr-1 text-base font-slab font-medium subpixel-antialiased text-bright">
            {category}
          </div>
          {open === true ? (
            <div className="block w-full mx-auto">
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
            <div className="block w-full mx-auto">
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
          <div className="block w-full">
            <ul className="flex flex-col flex-nowrap list-none">
              {dropdown?.map(({ id, title, description, href, target }) => (
                <li
                  className="text-sm font-normal subpixel-antialiased"
                  key={id}
                >
                  <NavLink
                    to={href}
                    target={target}
                    rel="noreferrer noopener"
                    aria-label="Mobile Navbar Link"
                    type="link"
                    className="block p-1 mx-auto hover:text-light active:text-light border border-light rounded hover:bg-dark hover:border hover:border-dark hover:rounded active:bg-dark active:border active:border-light active:rounded"
                  >
                    <span className="block text-base font-roboto font-medium subpixel-antialiased">
                      {title}
                    </span>
                    <span className="block text-sm font-roboto font-light subpixel-antialiased">
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
