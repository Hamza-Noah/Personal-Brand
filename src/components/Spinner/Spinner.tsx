import React, { useEffect, useRef, useState } from "react";
import star from "../../assets/image/star.svg";

const SpinningStar = () => {
  const spinnerRef = useRef<HTMLDivElement | null>(null);
  const [speed, setSpeed] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const angleRef = useRef(0);
  const startYRef = useRef(0);

  useEffect(() => {
    const spin = () => {
      angleRef.current += speed;
      if (spinnerRef.current) {
        spinnerRef.current.style.transform = `translate(-50%, -50%) rotate(${angleRef.current}deg)`;
      }
      requestAnimationFrame(spin);
    };

    const animationFrame = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    startYRef.current = e.clientY;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const deltaY = e.clientY - startYRef.current;
    const newSpeed = Math.max(0.5, Math.min(3, 3 - deltaY / 50));
    setSpeed(newSpeed);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    const speedUp = () => {
      setSpeed((prevSpeed) => {
        const newSpeed = prevSpeed * 1.02;
        return newSpeed < 3 ? newSpeed : 3;
      });
    };
    const interval = setInterval(speedUp, 10);
    setTimeout(() => clearInterval(interval), 2000);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
        margin: "20px",
      }}
    >
      <div
        ref={spinnerRef}
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "grab",
          userSelect: "none",
        }}
      >
        <img src={star} alt="spinning star" />
      </div>
    </div>
  );
};

export default SpinningStar;
