import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/quiz";

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
