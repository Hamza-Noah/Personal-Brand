import styles from "./form.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { useState } from "react";

const Form = () => {
  const { t, currentLang } = useTranslationContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <form
        className={` ${
          currentLang == "en" ? styles["ltr-icon"] : styles["rtl-icon"]
        }`}
      >
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
              currentLang == "en" ? "ms-auto" : "me-auto"
            }`}
          >
              <button
              className={`${styles.submit} ${
                isHovered ? styles["hovered-submit"] : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? t("form.hoverSubmit") : t("form.submit")}
              {currentLang == "en" && !isHovered && (
                <span className={`form-group ms-2 ps-1`}>$</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
