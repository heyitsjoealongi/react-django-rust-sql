// React -%- ////

// Packages -%- ////
import { createSlice } from "@reduxjs/toolkit";

// Types -%- ////
import type { PayloadAction } from "@reduxjs/toolkit";
type FormState = {
  value: {
    signup: {};
    logon: {};
  };
};

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
const initialState: FormState = {
  value: {
    signup: {},
    logon: {},
  },
};

// Application -%- ////

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<object>) => {
      state.value.signup = action.payload;
    },
    logon: (state, action: PayloadAction<object>) => {
      state.value.logon = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signup, logon } = authenticationSlice.actions;
export default authenticationSlice.reducer;
