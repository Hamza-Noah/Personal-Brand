import SpinningStar from "../Spinner/Spinner";
import playButton from "../../assets/image/paly button.png";
import styles from "./profession.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { useState, useEffect } from "react";

const Profession = () => {
  const { t, currentLang } = useTranslationContext();
  const [displayText, setDisplayText] = useState("");

  const text = "";
  const speed: number = 50;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return (
    <>
      <div className={`${styles.profession} text-center`}>
        <p
          className={`${
            currentLang === "en" ? "fw-bolder" : ""
          } text-center text-uppercase`}
        >
          {t("profession.info")}
        </p>
        <div
          className="d-flex flex-wrap
         align-items-center justify-content-between"
        >
          <div className={styles.job}>
            <p>{t("profession.visual")}</p>
          </div>
          <div className={styles.spinner}>
            <SpinningStar />
          </div>
          <div className={styles.job}>
            <p>{t("profession.artist")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profession;
