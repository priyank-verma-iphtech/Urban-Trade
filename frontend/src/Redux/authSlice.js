import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
  redirectAfterLogin: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },

    login: (state, action) => {
      const { email, password } = action.payload;

      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.currentUser = user;
        state.isLoggedIn = true;
      } else {
        
        state.currentUser = null;
        state.isLoggedIn = false;
      }
    },

    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
    setRedirectAfterLogin: (state, action) => {
        state.redirectAfterLogin = action.payload;
      },
      clearRedirectAfterLogin: (state) => {
        state.redirectAfterLogin = null;
      },
  },
});

export const { signup, login, logout,setRedirectAfterLogin,clearRedirectAfterLogin } = authSlice.actions;
export default authSlice.reducer;
