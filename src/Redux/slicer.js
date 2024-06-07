import { createSlice, configureStore } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    for: "",
    name: "",
    birthDay: "",
    issue: "",
  },
  reducers: {
    setFor: (state, action) => {
      state.for = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setBirthDay: (state, action) => {
      state.birthDay = action.payload;
    },
    setIssue: (state, action) => {
      state.issue = action.payload;
    },
  },
});

export const { setFor, setName, setBirthDay, setIssue } = patientSlice.actions;

export const store = configureStore({
  reducer: patientSlice.reducer,
});

export default patientSlice.reducer;
