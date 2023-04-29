import { useDispatch } from "react-redux";
import { changeByNumber } from "../slices/quiz";

const useQuestionHandler = () => {
  const dispatch = useDispatch();

  const questionHandler = (e) => {
    const number = e.target.name.replace("question", "");
    const value = e.target.value;
    const payload = { number, value };
    dispatch(changeByNumber(payload));
  };

  return questionHandler;
};

export default useQuestionHandler;
