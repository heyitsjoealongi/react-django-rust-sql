// React -%- ////

// Packages -%- ////
import { configureStore } from "@reduxjs/toolkit";

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import formReducer from "./slices/formSlice";
import authReducer from "./slices/authSlice";

// Application -%- ////
export const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
