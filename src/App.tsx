import { useEffect } from "react";
import { useTranslationContext } from "./contexts/TranslationContext";
import i18n from "./i18n";

function App() {
  const { t, changeLanguage, currentLang } = useTranslationContext();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [currentLang]);

  return (
    <>
      <h2>{t("Welcome to React")}</h2>
      <button onClick={() => changeLanguage("ar")}>ar</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <p>Current Language: {currentLang}</p>
    </>
  );
}

export default App;
