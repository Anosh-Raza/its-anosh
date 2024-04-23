"use client";
import React, { useEffect, useState } from "react";

const AnimatedNumber = ({ value, includeComma }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const endValue = parseInt(value.replace(/,/g, ""), 10);
    const duration = 2000; // Animation duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / endValue));
    const startTime = new Date().getTime();
    let timer;

    const updateValue = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const newValue = Math.floor(endValue - remaining * endValue);
      setCurrentValue(newValue);
      if (newValue >= endValue) {
        clearInterval(timer);
      }
    };

    const endTime = startTime + duration;
    timer = setInterval(updateValue, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return (
    <span>
      {includeComma
        ? currentValue.toLocaleString("en-US")
        : currentValue}
    </span>
  );
};

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: "Projects",
      value: "100",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Users",
      value: "100,000",
    },
    {
      metric: "Awards",
      value: "7",
    },
    {
      metric: "Years",
      value: "5",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumber
                value={achievement.value}
                includeComma={achievement.includeComma}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
