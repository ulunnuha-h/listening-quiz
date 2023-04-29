import useQuestionHandler from "../../../hooks/useQuestionHandler";

const Part1 = () => {
  const questionHandler = useQuestionHandler();

  return (
    <>
      <header className="flex gap-2 px-4 py-2 items-center my-4 bg-sky-200">
        <h2>Part 1</h2>
        <p>(Question 1 - 10)</p>
      </header>

      {/* Question 1-6 Header*/}
      <section className="flex gap-2 items-center mb-4">
        <span className="text-xl text-sky-600">Question 1-6</span>
        <button className="btn-secondary px-2 py-1">
          <i className="fa-solid fa-headphones"></i> Click here for listen
        </button>
      </section>
      <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em>

      {/* Question 1 */}
      <div className="flex my-4">
        <span className="number mr-3">1</span>
        <div>
          <p className="mb-2">What is the woman from?</p>
          <section className="input-radio">
            <input
              type="radio"
              id="q1a"
              name="question1"
              value="a"
              onChange={questionHandler}
            />
            <label htmlFor="q1a"> Germany</label>
          </section>
          <section className="input-radio">
            <input
              type="radio"
              id="q1b"
              name="question1"
              value="b"
              onChange={questionHandler}
            />
            <label htmlFor="q1b"> Rusia</label>
          </section>
          <section className="input-radio">
            <input
              type="radio"
              id="q1c"
              name="question1"
              value="c"
              onChange={questionHandler}
            />
            <label htmlFor="q1c"> Australia</label>
          </section>
          <section className="input-radio">
            <input
              type="radio"
              id="q1d"
              name="question1"
              value="d"
              onChange={questionHandler}
            />
            <label htmlFor="q1d"> Indonesia</label>
          </section>
        </div>
      </div>

      {/* Question 2 */}
      <div className="flex my-4">
        <span className="number mr-3">2</span>
        <div>
          <p className="mb-2">
            The woman says that you can travel from Croatia to Germany in two
            hours by
          </p>
          <section className="input-radio">
            <input
              type="radio"
              id="q2a"
              name="question2"
              value="a"
              onChange={questionHandler}
            />
            <label htmlFor="q2a"> Germany</label>
          </section>
          <section className="input-radio">
            <input
              type="radio"
              id="q2b"
              name="question2"
              value="b"
              onChange={questionHandler}
            />
            <label htmlFor="q2b"> Rusia</label>
          </section>
          <section className="input-radio">
            <input
              type="radio"
              id="q2c"
              name="question2"
              value="c"
              onChange={questionHandler}
            />
            <label htmlFor="q2c"> Australia</label>
          </section>
          <section className="input-radio">
            <input
              type="radio"
              id="q2d"
              name="question2"
              value="d"
              onChange={questionHandler}
            />
            <label htmlFor="q2d"> Indonesia</label>
          </section>
        </div>
      </div>

      {/* Question 7-10 Header*/}
      <section className="flex gap-2 items-center mb-4">
        <span className="text-xl text-sky-600">Question 7-10</span>
        <button className="btn-secondary px-2 py-1">
          <i className="fa-solid fa-headphones"></i> Click here for listen
        </button>
      </section>
      <em>
        Complete the form below, using NO MORE THAN THREE WORDS AND/OR NUMBER
        for each answer.
      </em>

      {/* Question 7-10 */}
      <div className="bg-gray-100 px-16 p-8 mt-4 mb-16">
        <p className="text-xl text-center">Travel Save</p>
        <p className="mb-4">Departement : Motor Insurance</p>
        <p>Client details :</p>
        <section className="input-text">
          <label htmlFor="q7">
            Name : Elisabeth<span className="number mx-2">7</span>
          </label>
          <input
            type="text"
            id="q7"
            name="question7"
            onChange={questionHandler}
          />
        </section>
        <p>Date of birth : 8. 10. 1975</p>
        <section className="input-text">
          <label htmlFor="q8">
            Address : <span className="number mx-2">8</span>
          </label>
          <input
            type="text"
            id="q8"
            name="question8"
            onChange={questionHandler}
          />
          <span> [street] Callington Haven</span>
        </section>
        <section className="input-text">
          <label htmlFor="q10">
            Policy Number : <span className="number mx-2">10</span>
          </label>
          <input
            type="text"
            id="q10"
            name="question10"
            onChange={questionHandler}
          />
        </section>
      </div>
    </>
  );
};

export default Part1;
