import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    answer: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  reducers: {
    changeByNumber: (state, action) => {
      state.answer[action.number] = action.payload;
    },
  },
});

export const { changeByNumber } = quizSlice.actions;

export default quizSlice.reducer;
