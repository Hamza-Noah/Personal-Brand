import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useEffect } from "react";
import Cookies from "js-cookie";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      loadPath: "locales/{{lng}}/translation.json",
    },
  });

function App() {
  const { t } = useTranslation();
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <>
      <h2>{t("Welcome to React")}</h2>
      <button
        onClick={() => {
          i18n.changeLanguage("ar");
        }}
      >
        ar
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        en
      </button>
    </>
  );
}

export default App;
