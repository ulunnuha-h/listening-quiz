import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    answer: Array(24).fill(""),
  },
  reducers: {
    changeByNumber: (state, action) => {
      state.answer[action.payload.number - 1] = action.payload.value;
    },
  },
});

export const { changeByNumber } = quizSlice.actions;

export default quizSlice.reducer;
