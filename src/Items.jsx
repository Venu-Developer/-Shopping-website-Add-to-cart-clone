import React, { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaGreaterThan, FaShoppingBag } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { userContext } from "./Context.jsx";
import "./Items.css";
import product from "./JsonItems.jsx";

function Items() {
  ////
  let [shirteSize,setShirtSize,handler,setHandler] =useContext(userContext);
   let [sizeOne,setSizeOne]=useState(false)
   let [sizeTwo,setSizeTwo]=useState(false)
   let [sizeThree,setSizeThree]=useState(false)
   let [sizeFour,setSizeFour]=useState(false)
  
  //
   let [currentSize,setCurrentSize]=useState(38)
  //get id
  let { id } = useParams();
  let currentProduct = parseInt(id[1]) - 1;
  let [cartDetails, setCartDetails] = useContext(userContext);
  /////:
  function sizeSelect(size) {
    console.log('kkkk,collor')
    setSizeOne(false)
    setSizeTwo(false)
    setSizeThree(false)
    setSizeFour(false)
    if(size==38){
      setSizeOne(true)
      setCurrentSize(38)
    }
    else if(size==40){
      setSizeTwo(true)
      setCurrentSize(40)
    }
    else if(size==42)
    {setSizeThree(true)
      setCurrentSize(42)
    }
    else if(size==44)
    {
      setSizeFour(true)
      setCurrentSize(44)
    }
  }

  // console.log("cartDetails222", cartDetails)
  function Ispresent(index) {
    for (let i = 0; i < cartDetails.length; i++) {
      if (cartDetails[i].id == index + 1) {
        return 0;
      }
      //  console.log(cartDetails[i].id,index+1,i)
    }
    return 1;
  }
  //click addcart
  function addCart(currentProduct) {
    console.log(currentProduct);
    let IsValue = Ispresent(currentProduct);
    if (IsValue) {
      let CurrentValue = product[currentProduct];
      setHandler({...handler,cardIndex:currentProduct})
      CurrentValue.size=currentSize;
      setCartDetails([...cartDetails, CurrentValue]);
    }

  }

  return (
    <div className="itemcolor">
      <div className="body">
        <div className="goback">
          <NavLink to="/">Go BacK</NavLink>
        </div>
        <div className="fullshow">
          <div className="image">
            <img src={product[currentProduct].image} />
          </div>
          <div className="select-card">
            <div>
              <p className="Brand">{product[currentProduct].Brand}</p>
            </div>
            <div>
              <p className="Shirt">{product[currentProduct].Shirt}</p>
            </div>

            <div className="Rating">
              {product[currentProduct].Rating}
              <span
                className="
            
            star"
              >
                <FaStar />
                <span
                  className="
            Line"
                >
                  |
                </span>
                <span className=" Point">2.8 Ranting</span>
              </span>
            </div>
            <hr />
            <div>
              <div className="">
                <span className="Money">{`Rs ${product[currentProduct].Money}`}</span>
                <span className="MRP">{`Rs ${product[currentProduct].originalMoney}`}</span>
                <span className="Discount">{`Rs ${product[currentProduct].Discount}`}</span>
              </div>
              <div className="Tax mt-2">
                <p>inclusive of all taxes</p>
              </div>
              <div className="d-flex">
                <p className="Size ">SELECT SIZE</p>
                <span className="Chart">SIZE CHART </span>
                <span
                  className="
                Chart"
                >
                  <FaGreaterThan />
                </span>
              </div>
              <div className=" button p-2" name='size'>
                <div >
                  <button id={(sizeOne)?"bordercolor":""} className="circle" onClick={()=>sizeSelect(38)} value="38" name='size'>
                    38
                  </button>
                </div>
                <div>
                  <button id={(sizeTwo)?"bordercolor":""}   onClick={()=>sizeSelect(40)} className="ms-1 circle" value="40" name='size'>
                    40
                  </button>
                </div>
                <div>
                  <button id={(sizeThree)?"bordercolor":""}   onClick={()=>sizeSelect(42)}  className="ms-1 circle" value="42" name='size'>
                    42
                  </button>
                </div>
                <div>
                  <button id={(sizeFour)?"bordercolor":""}   onClick={()=>sizeSelect(44)}  className="ms-1 circle" value="44" name='size'>
                    44
                  </button>
                </div>
              </div> 
              <div className="buy d-flex mt-3 ">
                {/* <button className="p-2 Addtobag" onClick={() => addCart(currentProduct)}>
                  <span className="add ms-1=1q  ">
                    <span className="bagicon ">
                      <FaShoppingBag />
                    </span>
                    <span className="text ms-1">ADD TO BAG</span>
                  </span>
                </button> */}
                <button
                  className="d-flex align-items-center Addtobag me-3 "
                  onClick={() => addCart(currentProduct)}
                >
                  <FaShoppingBag />
                  ADD TO BAG
                </button>
                <button className="Wishlist ">
                  <CiHeart />
                  WISHLIST
                </button>
                
              </div>
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

export default Items;
