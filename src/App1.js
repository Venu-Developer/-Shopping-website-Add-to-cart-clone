import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Items.css";
import { userContext, useUserContext } from "./Context.jsx";
function App1() {
  let [cartDetails, setCartDetails] = useContext(userContext);
  return (
    <div>
      <div className="menuall">
        <div className="menu">
          <div className="myntra">
            <img src="../myntra.webp" />
          </div>
          <div className="Link1 d-flex">
            <NavLink className="Link" to="MEN">
              MEN
            </NavLink>
            <NavLink className="Link" to="WOMEN">
              WOMEN
            </NavLink>
            <NavLink className="Link" to="KIDS">
              KIDS
            </NavLink>
            <NavLink className="Link" to="hOME">
              HOME & lIVING
            </NavLink>
            <NavLink className="Link" to="BEAUTY">
              BEAUTY
            </NavLink>
          </div>
        </div>
        <div>
          <span className="show">
            <div>
              <NavLink to="show" className="carticon">
                <i class="bi bi-bag-dash">
                  <span className="bagcount">{cartDetails.length}</span>
                </i>
              </NavLink>
            </div>
          </span>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App1;
