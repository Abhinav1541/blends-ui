import React from "react";
import "./StaggerText.css";

export const StaggerText = ({ text, className, fontColor, animationType }) => {
  let charCounter = 0;
  let delay = 0;
  const isLeftAnimation = animationType === "animated-slideinleft";
  const multiplier = isLeftAnimation ? 300 : 200;
  const totalMultiplier = isLeftAnimation ? 2 : 1.5;
  function sumCharactersInStrings(arrayOfStrings) {
    return arrayOfStrings.reduce((sum, string) => sum + string.length, 0);
  }
  const total = sumCharactersInStrings(text) * totalMultiplier * multiplier;
  return (
    <div className={`${className} flex flex-col`}>
      {text.map((word, wordIndex) => (
        <div key={wordIndex} className="flex gap-1">
          {word.split("").map((char, charIndex) => {
            charCounter++;
            delay = charCounter * multiplier;
            let cName = animationType + " ";
            const isLast = wordIndex === text.length - 1 && text.length > 1;
            cName = cName + (isLast ? "text-brand" : fontColor);
            return (
              <span
                key={charCounter}
                className={cName}
                style={{
                  "--startdelay": `${delay}ms`,
                  "--total": `${total}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
