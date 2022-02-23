import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div className={s.section}>
      <div className={s.about}>
        <h2 className={s.title}>Adventurer is a Founder in Gaming Chairs</h2>

        <div className={s.topLine}></div>
        <div className={s.gradient}></div>
        <div className={s.circlePillow}></div>
        <div className={s.circleBack}></div>
        <div className={s.circleSeat}></div>
        <div className={s.circleStand}></div>
        <div className={s.mainChair}></div>
      </div>
    </div>
  );
};

export default About;
