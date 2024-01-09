import { createContext, useContext, useState } from "react";

const SliderContext = createContext();

function SliderProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  function hanldeSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      setValue("");
      setError(false);
    } else {
      setError(true);
    }
  }
  return (
    <SliderContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        isMenuOpen,
        handleOpenMenu,
        handleCloseMenu,
        handleValue,
        value,
        hanldeSubmit,
        error,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

function useSlider() {
  const context = useContext(SliderContext);
  if (context === undefined)
    throw new Error("SliderContext was used outside of the SliderProvider");
  return context;
}

export { SliderProvider, useSlider };
