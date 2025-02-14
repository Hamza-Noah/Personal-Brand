import { useState, useEffect } from "react";
import navbar1 from "../assets/svg/navbar1.svg";
import navbar2 from "../assets/svg/navbar2.svg";
import navbar3 from "../assets/svg/navbar3.svg";
import navbar4 from "../assets/svg/navbar4.svg";
import navbar5 from "../assets/svg/navbar5.svg";
import navbar6 from "../assets/svg/navbar6.svg";
import navbar7 from "../assets/svg/navbar7.svg";
import navbar8 from "../assets/svg/navbar8.svg";
import navbar9 from "../assets/svg/navbar9.svg";
import navbar10 from "../assets/svg/navbar10.svg";
import navbar11 from "../assets/svg/navbar11.svg";
import navbar12 from "../assets/svg/navbar12.svg";
import navbar13 from "../assets/svg/navbar13.svg";
import navbar14 from "../assets/svg/navbar14.svg";
import navbar15 from "../assets/svg/navbar15.svg";

// Array of all navbar images
const logoImages = [
  navbar1,
  navbar2,
  navbar3,
  navbar4,
  navbar5,
  navbar6,
  navbar7,
  navbar8,
  navbar9,
  navbar10,
  navbar11,
  navbar12,
  navbar13,
  navbar14,
  navbar15,
];

// Custom hook to manage navbar image logic
export const useNavbarImage = () => {
  // Function to get the next image in sequence
  const getNextImage = () => {
    // Get the current index from localStorage or default to 0
    let currentIndex = parseInt(
      localStorage.getItem("navbarImageIndex") || "0",
      10
    );

    // Ensure the index is within bounds of the images array
    currentIndex = (currentIndex + 1) % logoImages.length;

    // Store the new index and the corresponding image in localStorage
    localStorage.setItem("navbarImageIndex", currentIndex.toString());
    localStorage.setItem("navbarImage", logoImages[currentIndex]);

    return logoImages[currentIndex];
  };

  const [navbarImage, setNavbarImage] = useState(() => getNextImage()); // Initialize state using getNextImage

  // Update image when component mounts or whenever the index in localStorage changes
  useEffect(() => {
    // Get the next image from localStorage and set the state
    const nextImage = getNextImage();
    setNavbarImage(nextImage);
  }, []); // Empty dependency array ensures this runs only once on component mount

  return navbarImage; // Return the navbar image
};
