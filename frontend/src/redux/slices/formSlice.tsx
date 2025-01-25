import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  value: {
    personal: {};
    introduction: {};
  };
};

const initialState: FormState = {
  value: {
    personal: {},
    introduction: {},
  },
};

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    personal: (state, action: PayloadAction<object>) => {
      state.value.personal = action.payload;
    },
    introduction: (state, action: PayloadAction<object>) => {
      state.value.introduction = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { personal, introduction } = formSlice.actions;

export default formSlice.reducer;
