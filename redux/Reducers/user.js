import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
    groups: [],
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.groups = null;
    },
    Login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.groups = action.payload.group;
    },
  },
});
export const { logout, Login } = usersSlice.actions;

export default usersSlice.reducer;
