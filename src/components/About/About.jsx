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
        <div className={s.seatStandDashes}></div>
        <div className={s.backDashes}></div>
        <div className={s.pillowDashes}></div>
        <div className={s.biggerPillow}>
          <p className={s.pillowContent}>
            Upgraded large neck pillow made with memory foam to bring our
            customers the most comfortable office chair for gaming and working.
          </p>
        </div>
        <div className={s.biggerBack}>
          <p className={s.backContent}>
            Our designers are creating the perfect high back ergonomic gaming
            chair.
          </p>
        </div>
        <div className={s.biggerSeat}>
          <p className={s.seatContent}>
            Luxury leather not only outshine the regular gaming computer chairs,
            but also bring you the ultimate comfort.
          </p>
        </div>
        <div className={s.biggerStand}>
          <p className={s.standContent}>
            In order to build a sumptuous and comfortable seat, VR Racer gaming
            chair are designed with a continued tradition of race car seat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
