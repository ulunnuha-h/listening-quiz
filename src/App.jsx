import Navbar from "./components/navbar";
import QuizForm from "./components/quiz/form";
import QuizStatus from "./components/quiz/status";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <div className="pt-24 flex gap-8 px-4">
        <section className="basis-2/3">
          <QuizForm />
        </section>
        <section className="basis-1/3">
          <QuizStatus />
        </section>
      </div>
    </main>
  );
}

export default App;
