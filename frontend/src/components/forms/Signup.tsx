// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

// Types -%- ////

// Components -%- ////
import Branding from "../branding/Branding";

// Middleware & Integrations -%- ////
import { signup } from "../../redux/slices/formSlice";

// Application -%- ////
export default function SignupForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  React.useEffect(() => {
    dispatch(signup(formik?.values));
  }, [dispatch, formik?.values]);

  return (
    <React.Fragment>
      <section className="block h-auto w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center"
        >
          <Branding />
          <h3 className="block my-3 font-slab text-3xl font-medium subpixel-antialiased text-light">
            Signup
          </h3>
          <label
            htmlFor="email"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik?.values?.email}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
          <label
            htmlFor="password"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik?.values?.password}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
        </form>
      </section>
    </React.Fragment>
  );
}
