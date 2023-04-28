import Navbar from "./components/navbar";
import QuizForm from "./components/quiz/form";
import QuizStatus from "./components/quiz/status";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <div className="pt-24 flex gap-8 px-4 lg:flex-nowrap flex-wrap">
        <section className="lg:basis-2/3 basis-full">
          <QuizForm />
        </section>
        <section className="lg:basis-1/3 basis-full mb-8">
          <QuizStatus />
        </section>
      </div>
    </main>
  );
}

export default App;
