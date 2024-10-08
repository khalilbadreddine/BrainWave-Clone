import "./index.css";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] overflow-hidden lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
