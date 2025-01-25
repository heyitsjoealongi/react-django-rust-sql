// React -%- ////
import React from "react";

// Packages -%- ////
import { useFormik } from "formik";

// Types -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Personal() {
  const formik = useFormik({
    initialValues: {
      pitch: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <section className="block h-auto w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center my-9 px-9"
        >
          <button
            type="submit"
            className="block w-full p-3 mx-auto text-2xl uppercase font-bold subpixel-antialiased text-light border border-darkoff rounded bg-darkoff hover:text-darkoff hover:bg-light hover:border-light active:text-light active:bg-darkoff active:border-light"
          >
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}
