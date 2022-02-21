import React from "react";
import s from "./Header.module.scss";
import SvgIcon from "../../UI/SvgIcon/SvgIcon";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.logo}>
          <div className={s.logoIconWrapper}>
            <SvgIcon iconName="icon-logo" className={s.icon} />
          </div>
          <div className={s.logoText}>Adventurer</div>
        </div>
        <nav>
          <ul className={s.nav}>
            <li className={s.item}>
              <NavLink
                to="/product"
                className={({ isActive }) => {
                  return isActive ? s.navLinkActive : s.navLink;
                }}
              >
                <p className={s.text}>Product</p>
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to="/sales"
                className={({ isActive }) => {
                  return isActive ? s.navLinkActive : s.navLink;
                }}
              >
                <p className={s.text}>Sales</p>
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to="/contacts"
                className={({ isActive }) => {
                  return isActive ? s.navLinkActive : s.navLink;
                }}
              >
                <p className={s.text}>Contacts</p>
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to="/support"
                className={({ isActive }) => {
                  return isActive ? s.navLinkActive : s.navLink;
                }}
              >
                <p className={s.text}>Support</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.cart}>
          <div className={s.langToggler}>
            <p className={s.langText}>En</p>
            <div className={s.languageIconWrapper}>
              <SvgIcon iconName="icon-arrow-down" className={s.icon} />
            </div>
          </div>
          <div className={s.cartIconWrapper}>
            <SvgIcon iconName="icon-cart" className={s.icon} />
          </div>
        </div>
      </div>
      <div className={s.line}>
        {/* <SvgIcon iconName="icon-product-line" className={s.icon} /> */}
      </div>
    </>
  );
};

export default Header;
