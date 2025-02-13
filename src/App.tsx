import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Cookies from "js-cookie";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    document.dir = i18n.dir();
  }, [lng]);

  return (
    <>
      <h2>{t("Welcome to React")}</h2>
      <button onClick={() => i18n.changeLanguage("ar")}>ar</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </>
  );
}

export default App;
