// React -%- ////
import * as React from "react";

// Packages -%- ////

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

// System Components -%- ////

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
  }, [open]);

  return (
    <React.Fragment>
      <div className="relative">
        <button
          id={`${"dropdown" + id}`}
          className="flex flex-row flex-nowrap justify-center items-center py-1 px-3 mx-auto border border-dark rounded hover:bg-darkoff hover:border hover:border-light hover:rounded active:bg-darkoff active:border active:border-light active:rounded"
          onClick={() => toggle(!open)}
        >
          <div className="pr-1 mx-auto self-center text-base font-slab font-medium subpixel-antialiased text-bright">
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
          <div className="absolute block w-60 mt-1 p-1 bg-dark border border-light rounded">
            <ul className="block w-auto flex flex-col flex-wrap mx-auto list-none ">
              {dropdown?.map(({ id, title, description, href, target }) => (
                <li
                  className="p-1 hover:bg-darkoff hover:rounded  active:bg-darkoff active:rounded"
                  key={id}
                >
                  <a
                    href={href}
                    target={target}
                    rel="noreferrer noopener"
                    aria-label="Resume Link"
                    type="link"
                    className="block mx-auto"
                  >
                    <span className="block text-base font-roboto font-medium subpixel-antialiased text-bright">
                      {title}
                    </span>
                    <span className="block text-sm font-roboto font-light subpixel-antialiased text-bright">
                      {description}
                    </span>
                  </a>
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
