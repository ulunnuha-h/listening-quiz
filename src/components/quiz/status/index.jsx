import Bullets from "./bullets";

const QuizStatus = () => {
  return (
    <aside className="bg-gray-100 p-8 sticky top-24">
      <p className="text-xl font-semibold">Question Status</p>
      <p>Lorem ipsum dolor sit amet</p>
      <Bullets />
      <div>
        <p className="text-lg font-semibold">Keterangan</p>
        <section className="flex gap-2 items-center mt-2">
          <span className="bullet-status answered"></span>
          <p>Answered</p>
        </section>
        <section className="flex gap-2 items-center mt-2">
          <span className="bullet-status"></span>
          <p>Unanswered</p>
        </section>
      </div>
    </aside>
  );
};

export default QuizStatus;
