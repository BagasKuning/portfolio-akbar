import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App text-slate-800">
      <div className="mx-7 relative">
        <Navbar />
      </div>
      <Hero />
    </div>
  );
}

export default App;
