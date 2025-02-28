import styles from "./career.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Alternative import for missing styles
import { Pagination } from "swiper/modules";

const Career = () => {
  const { t, currentLang } = useTranslationContext();

  const workPeriod = [
    {
      job: t("career.Graphic_Designer"),
      year: t("career.2018"),
      slogan: t("career.Branding"),
      location: t("career.usa"),
      period: "1 Yr 1 Mo",
    },
    {
      job: t("career.Art_Director"),
      year: t("career.2019"),
      slogan: t("career.Advertising"),
      location: t("career.Montreal"),
      period: "3 Yr 1 Mo",
    },
    {
      job: t("career.3D_Artist_Visual_Designer"),
      year: t("career.2022"),
      slogan: t("career.freelance"),
      location: t("career.dubai"),
      period: "1 Yr 5 Mo",
    },
    {
      job: t("career.Visual_Designer"),
      year: t("career.2023"),
      slogan: t("career.HungerStation"),
      location: t("career.dubai"),
      period: t("career.present"),
    },
  ];

  console.log(workPeriod);

  return (
    <>
      <section
        className={`${styles.career} ${currentLang == "ar" ? styles.ar : ""}
        `}
      >
        <div className="container">
          <h2 className="text-center">{t("career.timeline")}</h2>

          {/* Desktop View (Grid) */}
          <div className="d-none d-md-flex justify-content-between text-center">
            {workPeriod.map((data, i) => (
              <div className={styles.stage} key={i}>
                <p className={styles.slogan}>{data.slogan}</p>
                <p className={styles.location}>{data.location}</p>
                <h3 className={styles.position}>{data.job}</h3>
                <p className={styles.year}>{data.year}</p>
                <p className={styles.period}>{data.period}</p>
              </div>
            ))}
          </div>

          {/* Mobile View (Swiper) */}
          <div className="d-md-none text-center">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {workPeriod.map((data, i) => (
                <SwiperSlide className={styles.stage} key={i}>
                  <div className={styles.stage}>
                    <p className={styles.slogan}>{data.slogan}</p>
                    <p className={styles.location}>{data.location}</p>
                    <h3 className={styles.position}>{data.job}</h3>
                    <p className={styles.year}>{data.year}</p>
                    <p className={styles.period}>{data.period}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
