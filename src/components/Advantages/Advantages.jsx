import React from "react";
import s from "./Advantages.module.scss";

import SvgIcon from "../../UI/SvgIcon/SvgIcon";

const Advantages = () => {
  return (
    <section className={s.section}>
      <div className={s.advantages}>
        <div className={s.tab}>
          <SvgIcon iconName="icon-advantages-tab" />
        </div>
        <h2 className={s.title}>Our Advantages</h2>
      </div>
    </section>
  );
};

export default Advantages;
