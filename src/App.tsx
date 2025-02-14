import { useEffect } from "react";
import { useTranslationContext } from "./contexts/TranslationContext";
import i18n from "./i18n";
import Navbar from "./components/Navbar";

function App() {
  const { currentLang } = useTranslationContext();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [currentLang]);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
