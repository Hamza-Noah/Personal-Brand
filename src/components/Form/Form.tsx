import styles from "./form.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";

const Form = () => {
  const { t, currentLang } = useTranslationContext();

  console.log(t("form.emailPlaceholder"));

  return (
    <>
      <form className={` ${currentLang == "en" ? "" : "rtl"}`}>
        <div className={`${styles.header} d-flex justify-content-between`}>
          <h3>
            {t("form.title")}
            <span className="ps-3">&gt;/</span>
          </h3>
          <div className="buttons">
            <button type="button" className={styles.minimize}></button>
            <button type="button" className={styles.close}></button>
          </div>
        </div>
        <div className={`d-flex flex-wrap ${styles.inputs}`}>
          <div className={`form-group ${styles.input}`}>
            <input
              className="w-100"
              placeholder={t("form.namePlaceholder")}
              type="text"
            />
          </div>
          <div className={`form-group ${styles.input}`}>
            <input
              className="w-100"
              placeholder={t("form.emailPlaceholder")}
              type="email"
            />
          </div>
          <div className="form-group w-100">
            <textarea
              name=""
              placeholder={t("form.emailPlaceholder")}
              className="w-100"
            ></textarea>
          </div>
          <div
            className={`form-group ${
              currentLang == "en" ? "me-auto" : "ms-auto"
            }`}
          >
            <button className={`${styles.submit}`}>
              TAKE MY{" "}
              <span
                className={`form-group ${
                  currentLang == "en" ? "me-2" : "ms-2"
                }`}
              >
                $
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
