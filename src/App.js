import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  
  useEffect(() => {
    AOS.init()
    AOS.refresh();
  }, [])

  return (
    <div className="App text-slate-800">
      <div className="mx-7 relative">
        <Navbar />
      </div>
      <Hero />
      <div className="h-[1000px]">

      </div>
    </div>
  );
}

export default App;
