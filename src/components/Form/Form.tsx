import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap";
import styles from "./form.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";

const Form = () => {
  const { t, currentLang } = useTranslationContext();
  const tooltipRef = useRef<Tooltip | null>(null);
  const hideTimeoutRef = useRef<number | null>(null); // To store the timeout ID

  useEffect(() => {
    const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]') as HTMLElement;

    if (tooltipTriggerEl) {
      tooltipRef.current = new Tooltip(tooltipTriggerEl, {
        trigger: "manual",
        placement: "top",
      });
    }

    return () => {
      // Clean up the timeout and tooltip instance when the component is unmounted
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleCloseClick = () => {
    if (!tooltipRef.current) return;

    // Show the tooltip
    tooltipRef.current.show();

    // Hide after 5 seconds
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current); // Clear any previous timeout
    hideTimeoutRef.current = window.setTimeout(() => {
      tooltipRef.current?.hide();
    }, 5000);
  };

  return (
    <>
      <form
        className={`${
          currentLang == "en" ? styles["ltr-icon"] : styles["rtl-icon"]
        }`}
      >
        <div className={`${styles.header} d-flex justify-content-between`}>
          <h3>
            {t("form.title")}
            <span className="ps-3">&gt;/</span>
          </h3>
          <div className="buttons">
            <button
              type="button"
              className={styles.minimize}
            ></button>
            <button
              type="button"
              className={styles.close}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title={t("form.closed")}
              data-bs-custom-class="custom-tooltip"
              onClick={handleCloseClick} // Show tooltip on click
            ></button>
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
              placeholder={t("form.messagePlaceholder")}
              className="w-100"
            ></textarea>
          </div>
          <div
            className={`form-group ${
              currentLang == "en" ? "ms-auto" : "me-auto"
            }`}
          >
            <button
              className={`${styles.submit} ${currentLang == "ar" ? styles.ar : ""}`}
            >
              {t("form.submit")}
              {currentLang == "en" && (
                <span className="form-group ms-2 ps-1">$</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
