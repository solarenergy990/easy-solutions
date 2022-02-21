import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>ADVENTURER</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink to="/sales">SALES</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">CONTACTS</NavLink>
          </li>
          <li>
            <NavLink to="/support">SUPPORT</NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default Header;
