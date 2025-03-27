import { useState } from "react";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { useNavbarImage } from "../../hooks/useNavbarImage";
import styles from "./navbar.module.scss";
import mainLogo from "../../../public/signature.svg";
import menu from "../../assets/svg/menu.svg";

const Navbar = () => {
  const { changeLanguage, currentLang } = useTranslationContext();
  const navbarImage = useNavbarImage();

  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`${styles.navbar} ${currentLang === "en" ? styles.en : styles.ar}`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className={`${styles["language-buttons"]} d-none d-lg-block fw-bolder`}>
            <button
              className={`${styles["language-btn"]} ${
                currentLang === "ar" ? styles["language-btn-active"] : ""
              }`}
              onClick={() => changeLanguage("ar")}
            >
              AR
            </button>
            <button
              className={`${styles["language-btn"]} ${
                currentLang === "en" ? styles["language-btn-active"] : ""
              }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className="dropdown d-lg-none position-relative w-100">
            <button
              className={`btn border-0 ${styles["dropdown-toggle"]} w-100 text-start`}
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src={menu} alt="Menu" />
            </button>

            {isDropdownOpen && (
              <ul
                className={`dropdown-menu show ${styles["dropdown-menu"]}`}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "100%",
                  width: "120%",
                  backgroundColor: "#140f13",
                  border: "none",
                  borderRadius: 0,
                  margin: "0 -12px",
                  paddingLeft: 20
                }}
              >
                <li>
                  <button
                    className={`${styles["language-btn"]} ${
                      currentLang === "ar" ? styles["language-btn-active"] : ""
                    } w-100 text-start`}
                    onClick={() => {
                      changeLanguage("ar");
                      setIsDropdownOpen(false);
                    }}
                  >
                    AR
                  </button>
                </li>
                <li>
                  <button
                    className={`${styles["language-btn"]} ${
                      currentLang === "en" ? styles["language-btn-active"] : ""
                    } w-100 text-start`}
                    onClick={() => {
                      changeLanguage("en");
                      setIsDropdownOpen(false);
                    }}
                  >
                    EN
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Logos */}
          <div className={styles["logo"]}>
            <img height="24px" src={navbarImage} alt="Navbar Logo" />
          </div>
          <div className="logo">
            <img height="28" src={mainLogo} alt="Main Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
