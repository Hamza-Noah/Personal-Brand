import { useTranslationContext } from "../../contexts/TranslationContext";
import { useEffect, useState } from "react";
import { Carousel } from "bootstrap";
import cover1 from "../../assets/image/covers/cover1.jpg";
import cover2 from "../../assets/image/covers/cover2.jpg";
import cover3 from "../../assets/image/covers/cover3.jpg";
import cover4 from "../../assets/image/covers/cover4.jpg";
import cover5 from "../../assets/image/covers/cover5.jpg";
import cover6 from "../../assets/image/covers/cover6.jpg";
import cover7 from "../../assets/image/covers/cover7.jpg";
import cover8 from "../../assets/image/covers/cover8.jpg";
import cover9 from "../../assets/image/covers/cover9.jpg";
import cover10 from "../../assets/image/covers/cover10.jpg";
import coverR1 from "../../assets/image/covers/cover r1.jpg";
import coverR2 from "../../assets/image/covers/cover r2.jpg";
import coverR3 from "../../assets/image/covers/cover r3.jpg";
import coverR4 from "../../assets/image/covers/cover r4.jpg";
import coverR5 from "../../assets/image/covers/cover r5.jpg";
import coverR6 from "../../assets/image/covers/cover r6.jpg";
import coverR7 from "../../assets/image/covers/cover r7.jpg";
import coverR8 from "../../assets/image/covers/cover r8.jpg";
import coverR9 from "../../assets/image/covers/cover r9.jpg";
import coverR10 from "../../assets/image/covers/cover r10.jpg";
import next from "../../assets/image/left.svg";
import nextDark from "../../assets/svg/right-black.svg";
import prev from "../../assets/image/right.svg";
import prevDark from "../../assets/svg/left-black.svg";
import signatureYellow from "../../assets/svg/signature-yellow.svg";
import signatureDark from "../../assets/svg/signature-dark.svg";
import smile from "../../assets/image/Smile cover.png";

import styles from "./work.module.scss";




const Work = () => {
  const { t, currentLang } = useTranslationContext();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  
useEffect(() => {
  const carouselElement = document.getElementById("carouselExample");
  if (carouselElement) {
    new Carousel(carouselElement, {
      interval: 8000,
      ride: "carousel",
    });
  }
}, []);

  const workProjects: {
    img: string;
    responsiveImg: string;
    type: string;
    name: string;
    year: string;
    logoColor: string;
    linksColor: string;
    firstLinkColor?: string;
  }[] = [
    {
      img: cover1,
      responsiveImg: coverR1,
      type: t("work.3d"),
      name: t("work.skulz"),
      year: "2022",
      logoColor: "yellow",
      linksColor: "yellow",
    },
    {
      img: cover2,
      responsiveImg: coverR2,
      type: t("work.3d"),
      name: t("work.skulz"),
      year: "2022",
      logoColor: "yellow",
      linksColor: "yellow",
    },
    {
      img: cover3,
      responsiveImg: coverR3,
      type: t("work.editing"),
      name: t("work.amigos"),
      year: "2024",
      logoColor: "yellow",
      linksColor: "yellow",
    },
    {
      img: cover4,
      responsiveImg: coverR4,
      type: t("work.web"),
      name: t("work.Amro"),
      year: "2024",
      logoColor: "yellow",
      linksColor: "yellow",
    },
    {
      img: cover5,
      responsiveImg: coverR5,
      type: t("work.modeling"),
      name: t("work.HEN"),
      year: "2021",
      logoColor: "yellow",
      linksColor: "yellow",
    },
    {
      img: cover6,
      responsiveImg: coverR6,
      type: t("work.brand"),
      name: t("work.HumgerStation"),
      year: "2024",
      logoColor: "yellow",
      linksColor: "yellow",
    },
    {
      img: cover7,
      responsiveImg: coverR7,
      type: t("work.3d"),
      name: t("work.mekaverse"),
      year: "2022",
      logoColor: "black",
      linksColor: "yellow",
      firstLinkColor: "black",
    },
    {
      img: cover8,
      responsiveImg: coverR8,
      type: t("work.modeling"),
      name: t("work.X_HAI"),
      year: "2022",
      logoColor: "black",
      linksColor: "yellow",
    },
    {
      img: cover9,
      responsiveImg: coverR9,
      type: t("work.3d"),
      name: t("work.METAOUE"),
      year: "2024",
      logoColor: "black",
      linksColor: "black",
    },
    {
      img: cover10,
      responsiveImg: coverR10,
      type: t("work.3d"),
      name: t("work.selrf"),
      year: "2024",
      logoColor: "yellow",
      linksColor: "black",
      firstLinkColor: "black",
    },
  ];

  return (
    <>
      <div className={`${styles.work} ${currentLang == "ar" ? styles.ar : ""}`}>
        <div id="carouselExample" className="carousel slide position-relative">
          <h2 className={`${styles.title} text-center `}>{t("work.work")}</h2>

          <img
            className={`${styles["smile"]} position-absolute`}
            src={smile}
            alt=""
          />
          <div className="carousel-inner">
            {workProjects.map((workProject, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    styles.carousel
                  } carousel-item position-relative ${i === 0 ? "active" : ""}`}
                >
                  <img
                    src={workProject.img}
                    className="d-block w-100 d-none d-md-block"
                    alt="..."
                  />
                  <img
                    src={workProject.responsiveImg}
                    className="d-block w-100 d-md-none"
                    alt="..."
                  />
                  <div className={`${styles.content} position-absolute`}>
                    <div className={`${styles.signature}`}>
                      <img
                        src={
                          workProject.logoColor == "yellow"
                            ? signatureYellow
                            : signatureDark
                        }
                        alt=""
                      />
                      <img src={signatureDark} alt="" />
                      <span>{t("work.worry")}</span>
                    </div>
                    <div
                      className={`${styles.links}  ${
                        workProject.linksColor == "yellow"
                          ? styles["yellow-links"]
                          : styles["black-links"]
                      } d-none d-md-block`}
                    >
                   <a
    href="#"
    target="_blank"
    onMouseEnter={() => setHoveredLink("behance")}
    onMouseLeave={() => setHoveredLink(null)}
  >
    {hoveredLink === "behance" ? "Coming Soon" : "Behance"}
  </a>
  <a
    href="#"
    target="_blank"
    onMouseEnter={() => setHoveredLink("youtube")}
    onMouseLeave={() => setHoveredLink(null)}
  >
    {hoveredLink === "youtube" ? "Coming Soon" : "Youtube"}
  </a>
  <a
    className={`${workProject.linksColor ? styles["black-link"] : ""}`}
    href="#"
    target="_blank"
    onMouseEnter={() => setHoveredLink("instagram")}
    onMouseLeave={() => setHoveredLink(null)}
  >
    {hoveredLink === "instagram" ? "Coming Soon" : "Instagram"}
  </a>
                    </div>
                    <div className={`${styles.view} position-absolute d-lg-none`}>
                      View More <span>+</span>
                    </div>
                    <div className={`${styles["project-details"]} d-flex justify-content-between`}>
                      <div className="type">
                        {workProject.type}
                      </div>
                      <div className="name">
                      {workProject.name}

                      </div>
                      <div className="year">
                      {workProject.year}

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev m-0"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-ride="carousel" data-bs-interval="8000"
            data-bs-slide="prev"
          >
            <img height="30px" src={prev} alt="" />
            <img height="30px" src={prevDark} alt="" />
          </button>
          <button
            className="carousel-control-next m-0"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <img height="30px" src={next} alt="" />
            <img height="30px" src={nextDark} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Work;
