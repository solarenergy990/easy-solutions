import React from "react";
import s from "./Header.module.scss";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>ADVENTURER</div>
      <nav>
        <ul className={s.nav}>
          <li className={s.item}>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/sales">SALES</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/contacts">CONTACTS</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/support">SUPPORT</NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default Header;
