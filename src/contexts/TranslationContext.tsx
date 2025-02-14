import { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";

// Initialize i18n
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    keySeparator: ".",
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      loadPath: "locales/{{lng}}/translation.json",
    },
  });

// Create context
const TranslationContext = createContext<any>(null);

// Translation Provider
export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    Cookies.set("i18next", lng);
  };

  useEffect(() => {
    i18n.on("languageChanged", (lng) => setCurrentLang(lng));
  }, []);

  return (
    <TranslationContext.Provider value={{ t, changeLanguage, currentLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook to use translation context
export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider"
    );
  }
  return context;
};
