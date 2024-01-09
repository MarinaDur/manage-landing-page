import Main from "./components/Main";
import { SliderProvider } from "./context/SliderContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <SliderProvider>
        <Main />
      </SliderProvider>
    </>
  );
}

export default App;
