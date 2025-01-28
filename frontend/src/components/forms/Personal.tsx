// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

// Types -%- ////s

// Components -%- ////

// Middleware & Integrations -%- ////
import { personal } from "../../redux/slices/formSlice";

// Application -%- ////
export default function PersonalForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {},
  });

  React.useEffect(() => {
    dispatch(personal(formik?.values));
  }, [dispatch, formik?.values]);

  return (
    <React.Fragment>
      <section className="block h-auto w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center"
        >
          <h3 className="block my-3 font-slab text-3xl font-medium subpixel-antialiased text-light">
            Personal
          </h3>
          <label
            htmlFor="firstName"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik?.values?.firstName}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
          <label
            htmlFor="lastName"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik?.values?.lastName}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
          <label
            htmlFor="phone"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik?.values?.phone}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
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
        </form>
      </section>
    </React.Fragment>
  );
}
