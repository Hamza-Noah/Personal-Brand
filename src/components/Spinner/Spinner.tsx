import React, { useRef, useState } from "react";
import styles from "./spinner.module.scss";
import star from "../../assets/image/star.svg";

const SpinningStar = () => {
  const [isFast, setIsFast] = useState(false);

  const handleClick = () => {
    setIsFast(!isFast);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
        margin: "18px",
      }}
    >
      <div
        onMouseDown={handleClick}
        className={isFast ? styles.fastSpin : styles.normalSpin}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <img className={styles.star} src={star} alt="spinning star" />
      </div>
    </div>
  );
};

export default SpinningStar;
