import { useSelector } from "react-redux";

const Bullets = () => {
  const data = useSelector((state) => state.quiz.answer);

  return (
    <div className="flex flex-wrap gap-4 my-8">
      {data.map((val, idx) => (
        <span key={idx} className="bullet-status">
          {idx + 1}
        </span>
      ))}
    </div>
  );
};

export default Bullets;
