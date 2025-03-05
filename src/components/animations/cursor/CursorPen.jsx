import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const CursorPen = () => {
  const colors = ["#000000", "#FFFFFF"];
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    const coords = { x: 0, y: 0 };

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    const getBackgroundColor = (x, y) => {
      const element = document.elementFromPoint(x, y);
      if (!element) return "#FFFFFF";

      let currentElement = element;
      while (currentElement) {
        const style = window.getComputedStyle(currentElement);
        const bgColor = style.backgroundColor;

        if (bgColor === "rgb(0, 0, 0)" || bgColor === "#000000") {
          return "#000000";
        }

        currentElement = currentElement.parentElement;
      }

      return "#FFFFFF";
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      const bgColor = getBackgroundColor(x, y);
      const isDarkBackground = bgColor === "#000000";

      circles.forEach((circle, index) => {
        const scaleValue = 1 - (index / circles.length);
        circle.style.transform = `translate(${x - 8}px, ${y - 8}px) scale(${scaleValue})`;
        circle.style.opacity = scaleValue;

        circle.x = x;
        circle.y = y;

        circle.style.backgroundColor = isDarkBackground ? "#FFFFFF" : "#000000";

        const nextCircle = circles[index + 1] || circles[0];
        if (nextCircle) {
          x += (nextCircle.x - x) * 0.2;
          y += (nextCircle.y - y) * 0.2;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="circle fixed h-4 w-4 z-[999] rounded-full pointer-events-none overflow-hidden"
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default CursorPen;
