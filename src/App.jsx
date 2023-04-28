import Navbar from "./components/navbar";
import QuizForm from "./components/quiz/form";
import QuizStatus from "./components/quiz/status";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <div>
        <QuizForm />
        <QuizStatus />
      </div>
    </main>
  );
}

export default App;
