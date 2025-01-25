// React -%- ////
import React from "react";

// Packages -%- ////
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

// Types -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { introduction } from "../../redux/slices/formSlice";

// Application -%- ////
export default function Personal() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      pitch: "",
    },
    onSubmit: (values) => {},
  });

  React.useEffect(() => {
    dispatch(introduction(formik?.values));
  }, [dispatch, formik?.values]);

  return (
    <React.Fragment>
      <section className="block h-auto w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center my-9 p-9"
        >
          <h3 className="block my-3 font-slab text-3xl font-medium subpixel-antialiased text-light">
            Introduction
          </h3>
          <label
            htmlFor="pitch"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Your pitch
          </label>
          <textarea
            id="pitch"
            name="pitch"
            rows={6}
            cols={66}
            onChange={formik.handleChange}
            value={formik?.values?.pitch}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
        </form>
      </section>
    </React.Fragment>
  );
}
