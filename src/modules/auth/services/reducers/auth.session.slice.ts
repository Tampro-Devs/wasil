import type { UserData } from "../../types";
import { createSlice } from "@reduxjs/toolkit";

type AuthSessionState = {
  user: UserData | null;
  token: string | null;
  isSessionExpired: boolean;
};

const initialState: AuthSessionState = {
  user: null,
  token: null,
  isSessionExpired: true,
};

export const authSessionSlice = createSlice({
  name: "auth_session",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action?.payload;
    },

    signIn: (state, action) => {
      state.user = action?.payload;
      if (action?.payload) {
        state.isSessionExpired = false;
      }
    },

    signOut: (state) => {
      state.user = null;
    },

    setIsSessionExpired: (state, action) => {
      state.isSessionExpired = action.payload;
    },
  },
});

export const { signIn, signOut, setToken, setIsSessionExpired } =
  authSessionSlice.actions;

export default authSessionSlice.reducer;
