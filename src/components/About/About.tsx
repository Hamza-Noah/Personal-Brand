import { useState } from "react";
import { useTranslationContext } from "../../contexts/TranslationContext";
import styles from "./about.module.scss";
import about1 from "../../assets/image/about1.png";
import about2 from "../../assets/image/about2.png";
import about3 from "../../assets/image/about3.png";
import about4 from "../../assets/image/about4.png";
import about5 from "../../assets/image/about5.png";
import about6 from "../../assets/image/about6.png";
import aboutBtn1 from "../../assets/svg/about button3.svg";
import aboutBtn2 from "../../assets/svg/about button2.svg";
import aboutBtn3 from "../../assets/svg/about button1.svg";
import Drag from "../Drag/Drag";

const buttonImages = [aboutBtn1, aboutBtn2, aboutBtn3];

const About = () => {
  const { t, currentLang } = useTranslationContext();
  const [buttonIndexes, setButtonIndexes] = useState([0, 1, 2]);

  const nextButtonImage = (buttonIndex: number) => {
    setButtonIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[buttonIndex] =
        (newIndexes[buttonIndex] + 1) % buttonImages.length;
      return newIndexes;
    });
  };

  console.log(currentLang);

  return (
    <div className={`${styles.about} ltr`}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <div className={`${styles.icons} position-relative h-100`}>
              <div className={`${styles["dragged-icon"]} position-absolute`}>
                <Drag image={about2} />
              </div>
              <div className={`${styles["dragged-icon"]} position-absolute`}>
                <Drag image={about1} />
              </div>
              <div className={`${styles["dragged-icon"]} position-absolute`}>
                <Drag image={about3} />
              </div>
              <div className={`${styles["dragged-icon"]} position-absolute`}>
                <Drag image={about4} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className={`${styles.info} ps-5 ms-4`}>
              <h2
                className={`${
                  currentLang == "ar" ? "rtl " + styles.head : ""
                } position-relative`}
              >
                {t("about.cannot")}
                {currentLang == "en" ? (
                  <img
                    height="100px"
                    className={`${
                      currentLang == "en"
                        ? styles["movie-en"]
                        : styles["movie-ar"]
                    } position-absolute`}
                    src={about5}
                    alt=""
                  />
                ) : (
                  <img
                    height="100px"
                    className={`${
                      currentLang == "en"
                        ? styles["movie-en"]
                        : styles["movie-ar"]
                    } position-absolute`}
                    src={about6}
                    alt=""
                  />
                )}
              </h2>
              <p>{t("about.PROJECTS")}</p>
              <p className="pe-5 me-5">{t("about.draws")}</p>
              <div className="d-flex">
                {buttonIndexes.map((index, i) => (
                  <button
                    key={i}
                    className={`btn ${styles.btn}`}
                    onClick={() => nextButtonImage(i)}
                  >
                    <img src={buttonImages[index]} alt="Button" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
