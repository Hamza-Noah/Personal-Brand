import { useTranslationContext } from "../../contexts/TranslationContext";
import { useNavbarImage } from "../../hooks/useNavbarImage"; // Import the custom hook
import styles from "./navbar.module.scss";
import mainLogo from "../../../public/signature.svg";
import menu from "../../assets/svg/menu.svg";

const Navbar = () => {
  const { changeLanguage, currentLang } = useTranslationContext();

  // Get the navbar image from the custom hook
  const navbarImage = useNavbarImage();

  return (
    <div className={`${styles.navbar}`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="language-buttons d-none d-lg-block fw-bolder">
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
          <div className="dropdown d-lg-none position-static">
            <button
              className={`btn border-0 dropdown-toggle ${styles["dropdown-toggle"]}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={menu} alt="" />
            </button>
            <ul className={`dropdown-menu ${styles["dropdown-menu"]}`}>
              <li>
                {" "}
                <button
                  className={`${styles["language-btn"]} ${
                    currentLang === "ar" ? styles["language-btn-active"] : ""
                  }`}
                  onClick={() => changeLanguage("ar")}
                >
                  AR
                </button>
              </li>
              <li>
                <button
                  className={`${styles["language-btn"]} ${
                    currentLang === "en" ? styles["language-btn-active"] : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
              </li>
            </ul>
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
  );
};

export default Navbar;
