import Part1 from "./part1";
import Part2 from "./part2";

const QuizForm = () => {
  return (
    <div>
      <section className="flex items-center gap-4 mb-4">
        <h1>Listening Tip</h1>
        <span className="flex items-center gap-1 pill-blue">
          <i className="fa-regular fa-clock"></i> <p>Time Left 44.55</p>
        </span>
      </section>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus
        vel sapien et luctus. Ut tortor orci, ornare in hendrerit non, malesuada
        id sem.
      </p>
      <audio controls className="w-full">
        <source src="horse.mp3" type="audio/mpeg" />
      </audio>
      <form>
        <Part1 />
        <Part2 />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default QuizForm;
