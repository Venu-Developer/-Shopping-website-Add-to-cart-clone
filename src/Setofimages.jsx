import React from "react";
import App from "./App";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import product from "./JsonItems.jsx";

function Setofimages() {
  return (
    <div className="color row">
      {product.map((value, index) => {
        return (
          <div className="p-5 col-12 col-lg-4 col-md-6">
            <NavLink
              to={`buy/:${value.id}`}
              className="NavLink py-5  "
              key={value.id}
            >
              <div className="card d-flex mx-auto" style={{ width: "280px" }}>
                <div className=" card ">
                  <img className="imagesize img-fluid" src={value.image} />
                </div>
                <div className="card-body">
                  <div>
                    <p className="Brand">{value.Brand}</p>
                  </div>
                  <div>
                    <p className="Shirt">{value.Shirt}</p>
                  </div>
                  <div>
                    <p >
                      <span className="Money">{`Rs ${value.Money}`}</span>
                      <span className="MRP">{`Rs ${value.originalMoney}`}</span>{" "}
                      <span className="Discount">{`Rs ${value.Discount}`}</span>
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Setofimages;


// import React from 'react'

// const Setofimages = () => {
//   return (
//     <div>Setofimages</div>
//   )
// }

// export default Setofimages