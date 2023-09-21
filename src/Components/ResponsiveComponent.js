import React, { useEffect, useState } from "react";

export const ResponsiveComponent = () => {
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScreenSize("phone");
      } else if (width > 480 && width <= 768) {
        setScreenSize("tablet");
      } else if (width > 768 && width <= 1150) {
        setScreenSize("desktop_half");
      } else if (width > 1150 && width <=1750){
        setScreenSize("desktop");
      } else {
        setScreenSize("desktop_full");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenSize;
};