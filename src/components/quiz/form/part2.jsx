import placeholder from "../../../assets/placeholder.jpg";
import useQuestionHandler from "../../../hooks/useQuestionHandler";

const Part2 = () => {
  const questionHandler = useQuestionHandler();

  return (
    <>
      <header className="flex gap-2 px-4 py-2 items-center my-4 bg-sky-200">
        <h2>Part 2</h2>
        <p>(Question 11 - 24)</p>
      </header>

      {/* Question 11-13 Header*/}
      <section className="flex gap-2 items-center mb-4">
        <span className="text-xl text-sky-600">Question 11-13</span>
        <button className="btn-secondary px-2 py-1">
          <i className="fa-solid fa-headphones"></i> Click here for listen
        </button>
      </section>
      <em>Label the diagram/plan below</em>
      <br />
      <em>Write the correct letter, A-G to questions 11-13</em>
      <img src={placeholder} className="w-1/2 my-4 mx-auto"></img>

      {/* Question 11-13 */}
      <section className="input-text">
        <label htmlFor="q11">
          <span className="number">11</span> traffic lights
        </label>
        <input
          type="text"
          id="q11"
          className="ml-2"
          name="question11"
          onChange={questionHandler}
        />
      </section>
      <section className="input-text">
        <label htmlFor="q12">
          <span className="number">12</span> petrol station
        </label>
        <input
          type="text"
          id="q12"
          className="ml-2"
          name="question12"
          onChange={questionHandler}
        />
      </section>
      <section className="input-text">
        <label htmlFor="q13">
          <span className="number">13</span> blue van
        </label>
        <input
          type="text"
          id="q13"
          className="ml-2"
          name="question13"
          onChange={questionHandler}
        />
      </section>

      {/* Question 14-20 Header*/}
      <section className="flex gap-2 items-center mb-4 mt-8">
        <span className="text-xl text-sky-600">Question 14-20</span>
        <button className="btn-secondary px-2 py-1">
          <i className="fa-solid fa-headphones"></i> Click here for listen
        </button>
      </section>
      <em className="block">
        Answer the following questions NO MORE THAN THREE WORDS AND/OR NUMBER
      </em>

      {/* Question 14-16 */}
      <div className="flex my-4">
        <span className="number mr-3">14</span>
        <div>
          <p className="mb-2">What end of the market are the properties?</p>
          <section className="input-text">
            <label htmlFor="q14">
              <em className="font-semibold">answer </em>
            </label>
            <input
              type="text"
              id="q14"
              name="question14"
              onChange={questionHandler}
            />
          </section>
        </div>
      </div>
      <div className="flex my-4">
        <span className="number mr-3">15</span>
        <div>
          <p className="mb-2">
            What does the speaker compare byting houses with?
          </p>
          <section className="input-text">
            <label htmlFor="q15">
              <em className="font-semibold">answer </em>
            </label>
            <input
              type="text"
              id="q15"
              name="question15"
              onChange={questionHandler}
            />
          </section>
        </div>
      </div>
      <div className="flex my-4">
        <span className="number mr-3">16</span>
        <div>
          <p className="mb-2">How can you ask the speaker a question?</p>
          <section className="input-text">
            <label htmlFor="q16">
              <em className="font-semibold">answer </em>
            </label>
            <input
              type="text"
              id="q16"
              name="question16"
              onChange={questionHandler}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Part2;
