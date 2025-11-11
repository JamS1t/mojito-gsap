import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CockTails from "./components/CockTails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <CockTails />
      <About />
    </main>
  )
}

export default App