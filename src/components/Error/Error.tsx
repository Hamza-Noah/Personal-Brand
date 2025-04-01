import { useEffect, useRef, useState } from "react";
import { Tooltip } from "bootstrap"; 
import error from "../../assets/image/error.png";
import styles from "./error.module.scss";
import { useTranslationContext } from "../../contexts/TranslationContext";

const Error = () => {
  const { t, currentLang } = useTranslationContext();
  const tooltipRef = useRef<Tooltip | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0, dx: 1, dy: 1 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null); // Fixed TypeScript issue

  useEffect(() => {
    if (closeButtonRef.current) {
      tooltipRef.current = new Tooltip(closeButtonRef.current, {
        trigger: "manual",
        placement: "top",
      });
    }

    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

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
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleCloseClick = () => {
    if (!tooltipRef.current) return;

    if (isTooltipVisible) {
      tooltipRef.current.hide();
      setIsTooltipVisible(false);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    } else {
      tooltipRef.current.show();
      setIsTooltipVisible(true);

      // Hide after 5 seconds
      hideTimeoutRef.current = window.setTimeout(() => {
        tooltipRef.current?.hide();
        setIsTooltipVisible(false);
      }, 5000);
    }
  };

  return (
    <div className={`${styles.error} mt-5`}>
      <div className={`window ${currentLang === "en" ? styles["ltr-icon"] : styles["rtl-icon"]}`}>
        <div className={`${styles.header} d-flex justify-content-between`}>
          <h3>
            {t("error.error")}
            <span className="ps-3">&gt;/</span>
          </h3>
          <div className="buttons">
            <button type="button" className={styles.minimize}></button>
            <button
              ref={closeButtonRef}
              type="button"
              data-bs-toggle="tooltip"
              data-bs-trigger="manual"
              data-bs-placement="top"
              data-bs-title={t("form.closed")}
              data-bs-custom-class="custom-tooltip"
              className={styles.close}
              onClick={handleCloseClick}
            ></button>
          </div>
        </div>
        <div className={styles.body} ref={containerRef}>
          <img ref={imgRef} src={error} alt="error" className={styles["floating-img"]} />
        </div>
      </div>
    </div>
  );
};

export default Error;
