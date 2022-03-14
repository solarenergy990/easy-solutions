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
        <div className={s.safety}></div>
        <div className={s.serviceDesk}></div>
        <div className={s.delivery}></div>
        <div className={s.support}></div>

        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.itemWrapper}>
              <h3 className={s.itemTitle}>lifetime warranty</h3>
              <div className={s.safetyAdvantages}>
                <SvgIcon iconName="icon-safety-outlined" />
              </div>
              <p className={s.itemText}>
                We are offering the best warranty for gaming chair Adventurer
                you can't find anywhere else in the world.
              </p>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.itemWrapper}>
              <h3 className={s.itemTitle}>fast and free delivery</h3>
              <div className={s.safetyAdvantages}>
                <SvgIcon iconName="icon-delivery-truck-outlined" />
              </div>
              <p className={s.itemText}>
                Don't want to pay extra shipping when buy gaming chairs online?
                No problem, we cover it for you.
              </p>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.itemWrapper}>
              <h3 className={s.itemTitle}>excellent customer service</h3>
              <div className={s.safetyAdvantages}>
                <SvgIcon iconName="icon-service-desk-outlined" />
              </div>
              <p className={s.itemText}>
                Our live support are real humans standing by ready to help you
                with all your needs
              </p>
            </div>
          </li>
          <li className={s.item}>
            <div className={s.itemWrapper}>
              <h3 className={s.itemTitle}>support gamers</h3>
              <div className={s.safetyAdvantages}>
                <SvgIcon iconName="icon-customer-service-outlined" />
              </div>
              <p className={s.itemText}>
                We are offering the best warranty for gaming chair Adventurer
                you can't find anywhere else in the world.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
