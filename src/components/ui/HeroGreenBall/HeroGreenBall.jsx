import React, { useEffect } from "react";
import "./HeroGreenBall.css";

export const HeroGreenBall = () => {
  useEffect(() => {
    const ball = document.getElementById("ball");
    ball.animate(
      { offsetDistance: ["100%", "0%"] },
      {
        duration: 25000,
        iterations: Infinity,
        easing: "cubic-bezier(0,0,1,1)",
        direction: "alternate",
      }
    );
  }, []);
  return <div id="ball"></div>;
};
