import React, { useState, useEffect } from "react";
import typewriter from "../../assets/image/typewriter.svg";

const Typewriter = ({ text = "test", delay = 500 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Handle the typing and erasing animation
  useEffect(() => {
    if (isTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentIndex + 1));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false);
        }, delay * 2);

        return () => clearTimeout(pauseTimeout);
      }
    } else {
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentIndex - 1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        const pauseTimeout = setTimeout(() => {
          setIsTyping(true);
        }, delay * 2);

        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [currentIndex, delay, text, isTyping]);

  // Handle cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
<<<<<<< HEAD
    }, 530);
=======
    }, 530); // Slightly longer than the type delay for better visual effect
>>>>>>> 84cdec61b3776e8427eeaa271cf6156c27671ea3

    return () => clearInterval(blinkInterval);
  }, []);

  return (
<<<<<<< HEAD
    <div style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          visibility: "hidden",
          whiteSpace: "pre",
        }}
      >
        {text}
      </span>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          whiteSpace: "pre",
        }}
      >
        {currentText}
        <img
          src={typewriter}
          alt=""
          style={{
            marginLeft: "2px",
            visibility: showCursor ? "visible" : "hidden",
            verticalAlign: "middle",
          }}
        />
      </div>
=======
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <span style={{ minWidth: `${text.length}ch`, height: "192px" }}>
        {currentText}
      </span>
      <img
        src={typewriter}
        alt=""
        style={{
          marginLeft: "2px",
          visibility: showCursor ? "visible" : "hidden",
          verticalAlign: "middle",
        }}
      />
>>>>>>> 84cdec61b3776e8427eeaa271cf6156c27671ea
    </div>
  );
};

export default Typewriter;
