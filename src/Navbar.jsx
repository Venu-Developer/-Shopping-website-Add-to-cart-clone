import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="menu">
        <div className="myntra">
          <img src="myntra.webp" />
        </div>
        <div className="Link1">
          <NavLink className="Link" to="MEN">
            MEN
          </NavLink>
          <NavLink className="Link" to="WOMEN">
            WOMEN
          </NavLink>
          <NavLink className="Link" to="KIDS">
            KIDS
          </NavLink>
          <NavLink className="Link" to="HOME">
            HOME & lIVING
          </NavLink>
          <NavLink className="Link" to="BEAUTY">
            BEAUTY
          </NavLink>
        </div>
        <div>
          <NavLink to="show" className="carticon">
            <i class="bi bi-bag-dash">
              <span className="bagcount">{""}</span>
            </i>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
