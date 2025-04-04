import { useEffect } from "react";
import { useTranslationContext } from "./contexts/TranslationContext";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Profession from "./components/Profession";
import Work from "./components/Work";
import About from "./components/About";
import Career from "./components/Career";
import Footer from "./components/Footer";

function App() {
  const { currentLang } = useTranslationContext();

  useEffect(() => {
    // document.dir = i18n.dir();
    updateFontFamily();
  }, [currentLang]);

  const updateFontFamily = () => {
    if (currentLang === "ar") {
      document.body.style.fontFamily = "ArabicPoetryExtendedMedium, adoody";
      document.body.style.fontSize = "1.5rem";
    } else {
      document.body.style.fontFamily = "Space Mono, sans-serif";
      document.body.style.fontSize = ".8rem";
    }
  };

  return (
    <>
    <div className="overflow-hidden">  
        <Navbar />
        <Landing />
        <Profession />
        <Work />
        <About />
        <Career />
        <Footer />
    </div>
    </>
  );
}

export default App;
