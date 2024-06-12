import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { userContext, useUserContext } from "./Context.jsx";
import value from "./JsonItems.jsx";
import "./order.css";
function Showingorderitems() {
  let [cartDetails, setCartDetails ,shirteSize,setShirtSize,handler] = useContext(userContext);
  ///////
  // console.log("1111111111111111111");
  let [totalPrice, setTotalprice] = useState(0);
  let [discountPrice, setDiscountPrice] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  let [numberOfArray, setNumberofArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  
  useEffect(() => {
   let updatedSize=[...cartDetails];
  }, [])

  // deleting particular item
  function Delete(index) {
    let allLoginUserDetails = [...cartDetails];
    let afterRemainDetails = [];
    afterRemainDetails = allLoginUserDetails.filter(
      (value, ind) => ind != index
    );

    let particularCard = cartDetails[index];
    particularCard.selectItems = 1;
    setCartDetails(afterRemainDetails);
    // SumOfSelectItems();
  }

  ////dynamic updating values
  useEffect(() => {
    if (cartDetails) {
      SumOfSelectItems();
    }
    // setCartDetails(cartDetails)
  }, [totalAmount, totalPrice, discountPrice, cartDetails]);

  //Size of Shirt

  

  function SizeOfShirts(event) {
      let array = event.target.value.split(",");
      let value = Number(array[0]);
      let index = Number(array[1]);
      let particularCard = cartDetails[index];
      particularCard.size = value;
      setTotalprice();
      setCartDetails(cartDetails)
  }
  //Count of Shirts
  function CountofShirts(event) {
    let array = event.target.value.split(",");
    let value = Number(array[0]);
    let index = Number(array[1]);
    let particularCard = [...cartDetails];
    particularCard[index].selectItems = value;
    // console.log(cartDetails[index],'ddd');
    setCartDetails(particularCard);
  }

  //Total of All the price Amount
  function SumOfSelectItems() {
    let sumOfPrice = 0;
    let sumOfDiscount = 0;
    for (let i = 0; i < cartDetails.length; i++) {
      sumOfPrice += cartDetails[i].originalMoney * cartDetails[i].selectItems;
      sumOfDiscount += cartDetails[i].Discount * cartDetails[i].selectItems;
    }
    setTotalprice(sumOfPrice);
    setDiscountPrice(sumOfDiscount);
    setTotalAmount(sumOfPrice - sumOfDiscount);
  }

  return (
    <div className="scroll">
      <div className="menu d-flex justify-content-between">
        <div className="myntra">
          <img src="myntra.webp" />
        </div>
        <div className="d-flex mt-5">
          <p className="Bagcolor">Bag</p>
          <p>---Address---</p>
          <p>Payment</p>
        </div>
        <div className="mt-5">100 % SECURE</div>
      </div>
      <div className="row color ">
        <div className="goback">
          <NavLink to="/">Go BacK</NavLink>
        </div>
        <div className="col-12 col-lg-7 ps-5">
          {cartDetails.map((value, index) => {
            return (
              <div className="" key={index}>
                <div className=" py-5">
                  <div className=" ">
                    <div className="order ">
                      <div className="d-flex justify-content-end ">
                        <button
                          className="colornone"
                          onClick={() => Delete(index)}
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                      <div className="d-flex ">
                        <div
                          className="orderimage
              p-2"
                        >
                          <img src={value.image} />
                        </div>
                        <div className="p-2">
                          <div className="d-flex justify-content-space-between">
                            <p className="drak">{value.Brand}</p>
                          </div>

                          <div>
                            <p className="ligth1">{value.Shirt}</p>
                          </div>
                          <div className="ligth">
                            <p>Sold By : PREMIER APPARELA</p>
                          </div>
                          <div className="d-flex">
                            {/* <button ><NavLink to='size'>{`Size: ${value.size}`}</NavLink></button> */}
                            <select onChange={SizeOfShirts} value={cartDetails.size}>
                              {/* <option >{cartDetails.size}</option> */}
                              {/* {shirteSize.map((item) => (
                                < >
                                  <option key={item.id} value={item.size}>{`Size: ${item.size}`}</option>
                                </>
                              ))} */}
                               <option
                               
                                  value={`${value.size},${index}`}
                                >{`Size: ${value.size}`}
                              </option>
                              <option value={`38,${index}`}>Size: 38</option>
                              <option value={`40,${index}`}>Size: 40</option>
                              <option value={`42,${index}`}>Size: 42</option>
                              <option value={`44,${index}`}>Size: 44</option> 
                            </select>
                            <select className="ms-2" onChange={CountofShirts}>
                              <option
                                value={`${value.selectItems},${index}`}
                              >{`Qty: ${value.selectItems}`}</option>
                              {numberOfArray.map((value, ind) => (
                                <option
                                  key={ind}
                                  value={`${value},${index}`}
                                >{`Qty: ${value}`}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <p className="drak mt-2">
                              {`Rs ${value.Money}`}
                              <span className="line ms-2">
                                {`Rs ${value.originalMoney}`}
                              </span>
                              <span className="pink ms-2">{`Rs ${value.Discount}`}</span>
                            </p>
                          </div>
                          <div>
                            <p className="mt-2">
                              <span className="return1">14 days</span>{" "}
                              <span className="return">return available</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="  mt-5  col-lg-5 col-12 ">
          <div className="total p-2">
            <div>
              <p className="price">
                PRICE DETAILS ({cartDetails.length} Items)
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="allhead">Total MRP</p>
              <p className="end">{`Rs ${totalPrice}`}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="allhead">Discount on MRP</p>
              <p className="end">{`Rs ${discountPrice}`}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="allhead">Coupon Discount</p>
              <p className="end">Apply Coupon</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="allhead">
                Platform Fee <span className="pink">Know More</span>
              </p>
              <p className="free1">FREE</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="allhead">
                Shipping Fee <span className="pink">Know More</span>
              </p>
              <div className="d-flex">
                <p className="free">Rs79 </p>
                <span className="free1"> FREE</span>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="allhead">Total Amount</p>
              <p className="end">{`Rs ${totalAmount}`}</p>
            </div>
            <div className="center">
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Showingorderitems;
