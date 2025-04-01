import { useEffect, useRef } from "react";
import { Tooltip } from "bootstrap"; 
import error from "../../assets/image/error.png";
import styles from "./error.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";

const Error = () => {
  const { t, currentLang } = useTranslationContext();

  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0, dx: 1, dy: 1 });

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });

    const animate = () => {
      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      let { x, y, dx, dy } = positionRef.current;

      if (x + imgWidth >= containerWidth) {
        x = containerWidth - imgWidth;
        dx = -dx;
      } else if (x <= 0) {
        x = 0;
        dx = -dx;
      }

      if (y + imgHeight >= containerHeight) {
        y = containerHeight - imgHeight;
        dy = -dy;
      } else if (y <= 0) {
        y = 0;
        dy = -dy;
      }

      x += dx;
      y += dy;

      positionRef.current = { x, y, dx, dy };
      img.style.transform = `translate(${x}px, ${y}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.error} mt-5`}>
      <div
        className={`window ${
          currentLang === "en" ? styles["ltr-icon"] : styles["rtl-icon"]
        }`}
      >
        <div className={`${styles.header} d-flex justify-content-between`}>
          <h3>
            {t("error.error")}
            <span className="ps-3">&gt;/</span>
          </h3>
          <div className="buttons">
            <button
              type="button"
              className={styles.minimize}
            ></button>
            <button type="button"    data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="This top tooltip is themed via CSS variables."
              data-bs-custom-class="custom-tooltip" className={styles.close}></button>
          </div>
        </div>
        <div className={styles.body} ref={containerRef}>
          <img
            ref={imgRef}
            src={error}
            alt="error"
            className={styles["floating-img"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
