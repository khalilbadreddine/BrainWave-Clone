import "./index.css";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] overflow-hidden lg:pt-[5.25rem]">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
