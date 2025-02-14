import { useEffect, useState } from "react";
import { useTranslationContext } from "../../contexts/TranslationContext";
import styles from "./navbar.module.scss";
import navbar1 from "../../assets/svg/navbar1.svg";
import navbar2 from "../../assets/svg/navbar2.svg";
import navbar3 from "../../assets/svg/navbar3.svg";
import navbar4 from "../../assets/svg/navbar4.svg";
import navbar5 from "../../assets/svg/navbar5.svg";
import navbar6 from "../../assets/svg/navbar6.svg";
import navbar7 from "../../assets/svg/navbar7.svg";
import navbar8 from "../../assets/svg/navbar8.svg";
import navbar9 from "../../assets/svg/navbar9.svg";
import navbar10 from "../../assets/svg/navbar10.svg";
import navbar11 from "../../assets/svg/navbar11.svg";
import navbar12 from "../../assets/svg/navbar12.svg";
import navbar13 from "../../assets/svg/navbar13.svg";
import navbar14 from "../../assets/svg/navbar14.svg";
import navbar15 from "../../assets/svg/navbar15.svg";
import mainLogo from "../../../public/signature.svg";

const Test = () => {
  const { changeLanguage, currentLang } = useTranslationContext();

  const logoImages = [
    navbar1,
    navbar2,
    navbar3,
    navbar4,
    navbar5,
    navbar6,
    navbar7,
    navbar8,
    navbar9,
    navbar10,
    navbar11,
    navbar12,
    navbar13,
    navbar14,
    navbar15,
  ];

  // Function to get the next image in sequence
  const getNextImage = () => {
    let currentIndex =
      parseInt(localStorage.getItem("navbarImageIndex"), 10) || 0;

    // Get the next index, wrapping around if necessary
    const nextIndex = (currentIndex + 1) % logoImages.length;

    // Store the new index and the corresponding image
    localStorage.setItem("navbarImageIndex", nextIndex);
    localStorage.setItem("navbarImage", logoImages[nextIndex]);

    return logoImages[nextIndex];
  };

  const [navbarImage, setNavbarImage] = useState(getNextImage);

  useEffect(() => {
    setNavbarImage(getNextImage());
  }, []);

  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div className="language-buttons">
              <button
                className={`
                  ${styles["language-btn"]} ${
                  currentLang === "ar" ? styles["language-btn-active"] : ""
                }
                `}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
              <button
                className={`
                 ${styles["language-btn"]}
                  ${currentLang === "en" ? styles["language-btn-active"] : ""}`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>
            <div className={`${styles["logo"]}`}>
              <img height="24px" src={navbarImage} alt="Navbar Logo" />
            </div>
            <div className="logo">
              <img height="24px" src={mainLogo} alt="Main Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
