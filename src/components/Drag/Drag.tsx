import React, { useState, useRef, useEffect } from "react";
import "./drag.scss";

interface DragProps {
  image: string; // Single image URL
}

const Drag: React.FC<DragProps> = ({ image }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [draggedElement, setDraggedElement] = useState<HTMLImageElement | null>(null);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [hidden, setHidden] = useState<boolean>(false);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.preventDefault();
    if (!imageRef.current) return;

    setHidden(true); // Hide original image

    const img = imageRef.current;
    const imgRect = img.getBoundingClientRect();
    setStartX(e.clientX - imgRect.left);
    setStartY(e.clientY - imgRect.top);

    // Create a clone for dragging
    const clone = document.createElement("img");
    clone.src = image;
    clone.className = "dragged beginDrag";
    clone.style.position = "fixed";
    clone.style.width = `${img.width}px`;
    clone.style.height = `${img.height}px`;
    clone.style.left = `${e.clientX - startX}px`;
    clone.style.top = `${e.clientY - startY}px`;
    document.body.appendChild(clone);

    setDraggedElement(clone);
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !draggedElement) return;

    draggedElement.style.left = `${e.clientX - startX}px`;
    draggedElement.style.top = `${e.clientY - startY}px`;
  };

  const handleMouseUp = (): void => {
    if (!isDragging || !draggedElement) return;

    draggedElement.style.opacity = "0";
    setTimeout(() => {
      if (draggedElement.parentNode) {
        draggedElement.parentNode.removeChild(draggedElement);
      }
      setHidden(false);
    }, 400);

    setIsDragging(false);
    setDraggedElement(null);
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
  }, [isDragging, draggedElement]);

  return (
    <div className="drag-container">
      <img
        ref={imageRef}
        src={image}
        alt="Draggable"
        className={`drag-item ${hidden ? "hidden" : ""}`}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Drag;
