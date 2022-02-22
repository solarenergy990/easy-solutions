import React from "react";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={s.heroOverlay}>
      <div className={s.hero}>
        <h1 className={s.title}>Experience the best Gaming Office Chairs</h1>
        <p className={s.text}>Special limited edition chairs</p>
        <button type="button" className={s.button}>
          Order Adventurer
        </button>
      </div>
    </div>
  );
};

export default Hero;
