import SpinningStar from "../Spinner/Spinner";
import playButton from "../../assets/image/paly button.png";
import styles from "./profession.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";
import Typewriter from "../Typewriter/Typewriter";

const Profession = () => {
  const { t, currentLang } = useTranslationContext();

  return (
    <>
    <div className={`${styles.profession} ${currentLang === "ar" ? styles.ar + " rtl" : ""} text-center`}>
        <p
          className={`${
            currentLang === "en" ? "fw-bolder" : ""
          } text-center text-uppercase`}
        >
          {t("profession.info")}
        </p>
        <div
          className={`${
            currentLang == "ar" ? "justify-content-evenly row-reverse" : ""
          } d-flex flex-column flex-md-row
         align-items-center justify-content-center`}
        >
          <div className={`${styles.job}  ${styles.play} position-relative`}>
            {currentLang == "en" && <p>{t("profession.visual")}</p>}

            {currentLang == "ar" && (
             <p>


{currentLang == "ar" && (
                t("profession.visual")
              )}


             </p>
              )}

            <img
              src={playButton}
              alt=""
              className={`position-absolute d-none d-lg-block`}
            />
          </div>
          <div className={`${styles.spinner} d-flex justify-content-center`}>
            <SpinningStar />
          </div>
          <div className={styles.job}>
            <p className={`${currentLang == "ar" ? "rtl": ""}`}>
              {" "}
              {currentLang == "en" && (
                <Typewriter text={t("profession.artist")} />
              )}
              
              {currentLang == "ar" && (
<Typewriter text={t("profession.artist")} />
               )} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profession;
