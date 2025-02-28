import banner from "../../assets/image/banner.jpg";
import bannerResponsive from "../../assets/image/banner-responsive.jpg";
import banner2 from "../../assets/image/banner2.png";
import banner2Responsive from "../../assets/image/banner2 responsive.png";
import bannerAtom from "../../assets/image/banner Atom.png";
import styles from "./landing.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";
const Landing = () => {
  const { t, currentLang } = useTranslationContext();

  return (
    <>
      <div className={`${styles.landing} py-3`}>
        <div className="row m-0">
          <div className={`col-xs-12 col-md-5 ${styles.banner} p-0`}>
            <picture className="w-100">
              <source media="(min-width:992px)" srcSet={banner} />
              <source media="(min-width:0px)" srcSet={bannerResponsive} />
              <img width="100%" src={banner} alt="Flowers" />
            </picture>
            <br />
            <div
              className={`d-flex justify-content-between align-items-center mt-3 position-relative ${styles.details}`}
            >
              <div
                className={`image text-center d-lg-none position-absolute ${styles["small-banner2"]}`}
              >
                <img
                  className={`${currentLang === "ar" ? "" : "ms-3"} 
                        }`}
                  src={banner2Responsive}
                  alt=""
                />
              </div>
              <div className={`px-3`}>
                <span className="pe-2">{t("landing.chapter")}</span>
                <span className="">{t("landing.wake")}</span>
              </div>
              <div className="d-none d-lg-block">
                <span
                  className={currentLang === "ar" ? "adoody fw-lighter" : ""}
                >
                  {t("landing.year")}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className={`${styles.branding} h-100`}>
              <div className="row h-100">
                <div
                  className={`${styles["first-work"]} col-md-6 px-3
                `}
                >
                  <div>
                    <div className="image text-center d-none d-lg-block">
                      <img
                        className={currentLang === "ar" ? "" : "ms-3"}
                        src={banner2}
                        alt=""
                      />
                    </div>
                    <br />
                    <div className="d-flex">
                      {currentLang === "en" && (
                        <p className={"pe-3 d-none d-lg-block"}>
                          {t("landing.first_work_date").toLocaleString("en-US")}
                        </p>
                      )}
                      <div
                        className={`d-lg-none pb-3 pe-3 
                  `}
                      >
                        <span
                          className={
                            currentLang === "ar" ? "adoody fw-lighter" : ""
                          }
                        >
                          {t("landing.2024_2")}
                        </span>
                      </div>
                      <p
                        className={`${
                          currentLang === "ar"
                            ? "rtl " + styles["first-work-description"]
                            : ""
                        }                           
                        }                   
                     `}
                      >
                        {t("landing.first_work")}
                      </p>
                      {currentLang === "ar" && (
                        <p
                          className={`${styles["first-work-date"]} adoody ps-3 d-none d-lg-block
                        `}
                        >
                          {t("landing.first_work_date")}
                        </p>
                      )}
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box text-center d-flex flex-md-column h-100">
                    <div
                      className=" d-lg-none pb-3 pe-3 align-self-end
                    "
                    >
                      <span
                        className={
                          currentLang === "ar" ? "adoody fw-lighter" : ""
                        }
                      >
                        {t("landing.birthyear")}
                      </span>
                    </div>
                    <div
                      className={`${styles["age"]} ${
                        currentLang === "ar" ? "adoody fw-lighter" : ""
                      } pe-3`}
                    >
                      {t("landing.age")}
                    </div>
                    <p
                      className={`${styles.birthyear} d-none d-lg-block  mb-0`}
                    >
                      {t("landing.birthyear")}
                    </p>
                    <div
                      className={`${styles["yellow-box"]} w-100 position-relative text-dark text-left`}
                    >
                      <p className="d-none d-lg-block">
                        {t("landing.old_young")}
                      </p>
                      <img
                        className={`${styles["banner-atom"]} d-none d-lg-block`}
                        src={bannerAtom}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pe-0">
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
