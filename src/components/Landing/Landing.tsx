import banner from "../../assets/image/banner.jpg";
import banner2 from "../../assets/image/banner2.png";
import bannerAtom from "../../assets/image/banner Atom.png";
import styles from "./landing.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";
const Landing = () => {
  const { t, currentLang } = useTranslationContext();

  return (
    <>
      <div className={`${styles.landing} py-3`}>
        <div className="row m-0">
          <div className={`col-xs-12 col-lg-5 ${styles.bonner} p-0`}>
            <img width="100%" src={banner} alt="" />
            <br />
            <div
              className={`d-flex justify-content-between align-items-center mt-3 ${styles.details}`}
            >
              <div className={`px-3`}>
                <span className="pe-2">{t("landing.chapter")}</span>
                <span className="">{t("landing.wake")}</span>
              </div>
              <div>
                <span
                  className={currentLang === "ar" ? "adoody fw-lighter" : ""}
                >
                  {t("landing.year")}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-7">
            <div className={`${styles.branding} h-100`}>
              <div className="row h-100">
                <div className={`${styles["first-work"]} col-lg-6`}>
                  <div>
                    <div className="image text-center">
                      <img
                        className={currentLang === "ar" ? "" : "ms-3"}
                        src={banner2}
                        alt=""
                      />
                    </div>
                    <br />
                    <div className="d-flex">
                      {currentLang === "en" && (
                        <p className={"pe-3"}>
                          {t("landing.first_work_date").toLocaleString("en-US")}
                        </p>
                      )}
                      <p className={currentLang === "ar" ? "rtl" : ""}>
                        {t("landing.first_work")}
                      </p>
                      {currentLang === "ar" && (
                        <p className={`${styles["first-work-date"]}  ps-3`}>
                          {t("landing.first_work_date")}
                        </p>
                      )}
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="box text-center d-flex flex-column h-100">
                    <div
                      className={`${styles["age"]} ${
                        currentLang === "ar" ? "adoody fw-lighter" : ""
                      }`}
                    >
                      {t("landing.age")}
                    </div>
                    <p className={`${styles.birthyear}`}>
                      {t("landing.birthyear")}
                    </p>
                    <div
                      className={`${styles["yellow-box"]} position-relative text-dark text-left`}
                    >
                      <p>{t("landing.old_young")}</p>
                      <img className={styles["banner-atom"]} src={bannerAtom} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-0">
                  <div className={`h-100 ${styles["bg-pink"]}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
