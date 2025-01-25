// React -%- ////
import React from "react";

// Packages -%- ////
import { useFormik } from "formik";
import { useSelector } from "react-redux";

// Types -%- ////
import type { RootState } from "../../redux/store";

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export default function Personal() {
  const form = useSelector((state: RootState) => state.counter.value);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(form, null, 2));
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
