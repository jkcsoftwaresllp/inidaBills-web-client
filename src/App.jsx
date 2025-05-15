import "./App.css";
import ButtonNav from "./components/buttons/buttonNav";
import ButtonWithBG from "./components/buttons/buttonWithBG";

function App() {

  return <>IndiaBills
  <ButtonNav label="Home" underline={1} />
  <ButtonNav label="Home" underline={0} />
  <ButtonWithBG label="Book Demo" background={1} rounded="full" />
  <ButtonWithBG label="Book Demo" background={0} rounded="full" />
  <ButtonWithBG label="Book Demo" background={1} rounded="lg" />
  </>;
}

export default App;
