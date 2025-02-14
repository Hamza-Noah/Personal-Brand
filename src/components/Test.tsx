import { useTranslationContext } from "../contexts/TranslationContext";

const Test = () => {
  const { t } = useTranslationContext();
  return <h2>{t("home.welcome")}</h2>;
};

export default Test;
